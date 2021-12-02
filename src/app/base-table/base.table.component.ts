import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {FetchService} from '../fetch-service/fetch.service';

export interface Entry {
	readonly name: string;
	readonly title: string;
	readonly width: number|string;
	readonly viewFn?: (x:any) => any;
}

export interface EntryLong extends Entry {
	readonly editTitle: string;
	readonly editType: "input"|"textarea"|"select"|"multi-select"|"checkbox"|"file-upload"|"input-password";
	readonly formControlName: string;
	readonly editFn?: (x:any) => any;
	readonly editRequire?: boolean;
	readonly editReceiveFn?: () => Promise<Array<any>|any>;
}

export interface Query {
	readonly namespace: string;
	readonly method: "GET"|"POST";
	readonly success: (x:any) => any;
	readonly ctxSuccess?: any;
	readonly error?: (x:any) => any;
	readonly ctxError?: any;
}

@Component({
	selector: 'base-table',
	templateUrl: './base.table.component.html',
	styleUrls: []
})
export class BaseTableComponent implements OnInit, OnDestroy {
	constructor(private modalService: NgbModal) {}
	
	// {name, title, width}
	// {titleEdit, typeEdit(Input, textArea, Select, mSelect), requireEdit, cbEdit}
	@Input()
	public fields: Array<Entry|EntryLong> = [];
	
	@Input()
	public isMore: boolean = false;
	
	@Input()
	public isCreate: boolean = false;
	
	@Input()
	public isEdit: boolean = false;
	
	@Input()
	public isRemove: boolean = true;
	
	@Input()
	public isDelete: boolean = true;
	
	@Input()
	public querys: Array<Query> = [];
	
	@Input()
	public service: FetchService|null = null;
	
	@Input()
	public isFormData: boolean = false;
	
	public isEntryLong(entry: Entry|EntryLong):entry is EntryLong {
		return (entry as EntryLong).editType !== undefined;
	}
	
	public refreshSettings() {
		let o: any = {};
		
		this.fields.map((field) => {
			if(this.isEntryLong(field)) {
				let opts: Array<any> = [];
				if(field.editRequire) opts.push(Validators.required);
				if(field.editType === 'multi-select' || field.editType === 'file-upload') {
					o[field.formControlName] = new FormControl([], opts);
				} else if(field.editType === 'checkbox') {
					o[field.formControlName] = new FormControl(false, opts);
				} else {
					o[field.formControlName] = new FormControl('', opts);
				}
			}
		});
		
		this.modalForm = new FormGroup(o);
	}
	
	protected editFnData(o: any) {
		let newO: any = {};
		this.fields.map((field) => {
			if(this.isEntryLong(field)) {
				newO[field.formControlName] = field.editFn?field.editFn(o[field.name]):o[field.name];
			}
		});
		return newO;
	}
	
	protected setFormValue(o: any) {
		let fields = this.modalForm.controls;
		Object.keys(o).map((key) => {
			if(fields[key]) fields[key].setValue(o[key]);
		});
	}
	
	protected getFormValue(input: any = {}) {
		let o: any = {};
		Object.keys(input).map((key) => {
			o[key] = input[key];
		});
		Object.keys(this.modalForm.controls).map((key) => {
			o[key] = this.modalForm.controls[key].value;
		});
		return o;
	}
	
	protected getFormData() {
		const formData = new FormData();
		Object.keys(this.modalForm.controls).map((key) => {
			let data = this.modalForm.controls[key].value;
			if(Array.isArray(data)) {
				for(let item of data) {
					formData.append(key+'[]', item);
				}
			} else {
				formData.append(key, data);
			}
		});
		return formData;
	}
	
	protected emptyObject(o: any) {
		Object.keys(o).map((key) => {
			o[key] = '';
		});
		return o;
	}
	
	protected addModalRef: any;
	
	public data: Array<any> = [];
	public inProcess: Array<number> = [];
	public moreProcess: boolean = false;
	public addProcess: boolean = false;
	public addError: string = '';
	
	// modal form data
	modalForm: FormGroup = new FormGroup({});
	modalTitle = '...';
	
	deletedId: number = 0;
	
	onModalEdit: any;
	onModalConfirm: any;
	
	protected obss: any = {};
	protected obsErrors: any = {};
	
	ngOnInit() {
		
		this.querys.map((entry) => {
			this.obss[entry.namespace+entry.method] = this.service!.source(entry.namespace, entry.method).subscribe((data: any) => {
				entry.success.call(entry.ctxSuccess || this, data);
			});
			if(entry.error) {
				this.obsErrors[entry.namespace+entry.method] = this.service!.error(entry.namespace, entry.method).subscribe((e: any) => {
					(entry.error as Function).call(entry.ctxError || this, e);
				});
			}
		});
		
		this.onMore(new Event('click'));
	}
	
	ngOnDestroy() {
		Object.keys(this.obss).map((key) => {
			this.obss[key].unsubscribe();
			if(this.obsErrors[key]) this.obsErrors[key].unsubscribe();
		});
	}
	
	onEdit(e: any, modalContent: any, entry: any, index: number) {
		e.preventDefault();
		const modalRef = this.modalService.open(modalContent, {size: 'lg'});
		modalRef.result.then((result) => {}, (reason) => {});
		
		this.modalTitle = 'Edit';
		this.setFormValue(this.editFnData(entry));
		
		this.onModalEdit = (e: Event) => {
			e.preventDefault();
			if(this.modalForm.valid) {
				modalRef.close();
				this.service!.post('edit', this.isFormData?this.getFormData():this.getFormValue(entry));
				this.inProcess = [...this.inProcess, entry.id];
			}
		}
	}
	
	onRemove(e: any, entry: any, index: number) {
		e.preventDefault();
		this.service!.post('remove', {id: entry.id});
		this.inProcess = [...this.inProcess, entry.id];
	}
	
	onDelete(e: any, modalContent: any, entry: any, index: number) {
		e.preventDefault();
		const modalRef = this.modalService.open(modalContent, {size: 'sm'});
		modalRef.result.then((result) => {}, (reason) => {});
		
		this.deletedId = entry.id;
		
		this.onModalConfirm = (e: Event) => {
			e.preventDefault();
			this.service!.post('delete', {id: entry.id});
			this.inProcess = [...this.inProcess, entry.id];
			modalRef.close();
		}
		
		
	}
	
	onCreate(e: Event, modalContent: any) {
		e.preventDefault();
		const modalRef = this.modalService.open(modalContent, {size: 'lg'});
		modalRef.result.then((result) => {}, (reason) => {this.addError = '';});
		this.addModalRef = modalRef;
		
		this.modalTitle = 'Create';
		this.setFormValue(this.emptyObject(this.getFormValue()));
		
		this.onModalEdit = (e: Event) => {
			e.preventDefault();
			if(this.modalForm.valid) {
				this.service!.post('add', this.isFormData?this.getFormData():this.getFormValue());
				this.addProcess = true;
				this.addError = '';
			}
		}
	}
	
	protected currentPage: number = 1;
	
	onMore(e: Event) {
		e.preventDefault();
		if(this.currentPage < 1) this.currentPage = 1;
		this.service!.get('gets', {params: {page: this.currentPage}});
		this.currentPage++;
		this.moreProcess = true;
	}
	
	public patchData(data: any) {
		this.data = this.data.map((item: any) => {
			if(item.id === data.id) {
				let keys = Object.keys(data);
				keys.map((key) => {
					item[key] = data[key];
				});
			}
			return item;
		});
		this.inProcess = this.inProcess.filter((item) => item !== data.id);
	}
	
	public filterData(data: any) {
		this.data = this.data.filter((item: any) => {
			return item.id !== data.id;
		});
		this.inProcess = this.inProcess.filter((item) => item !== data.id);
	}
	
	public filterError(e: any) {
		let id = e.error.id;
		this.inProcess = this.inProcess.filter((item) => item !== id);
	}
	
	public injectErrorAdd(e: any) {
		this.addError = e.error.reason;
		this.addProcess = false;
	}
	
	public injectData(data: Array<any>) {
		if(data.length === 0) this.currentPage--;
		this.data = [...this.data, ...data];
		this.moreProcess = false;
	}
	
	public injectOneData(data: any) {
		this.data = [data, ...this.data];
		this.addProcess = false;
		try { this.addModalRef.close(); } catch(e) {}
	}
	
	public injectAddData(data: any[]) {
		this.data = [...data, ...this.data];
		this.addProcess = false;
		try { this.addModalRef.close(); } catch(e) {}
	}
}
