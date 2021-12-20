import {Component, OnInit, OnDestroy, Input, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {TypeField} from '../edit-field/edit.field.component';

export interface EntryNew {
	readonly name: string;
	readonly title: string;
	readonly type: TypeField;
	readonly formControlName: string;
	readonly editFn?: (x:any) => any;
	readonly required?: boolean;
	readonly editReceiveFn?: () => Promise<Array<any>|any>;
}

@Component({
	selector: 'button-modal',
	templateUrl: './button.modal.component.html',
	styleUrls: [],
	styles: []
})
export class ButtonModalComponent implements OnInit, OnDestroy {

	constructor(private modalService: BsModalService) {}

	@Input()
	public titleButton: string = 'Create';

	@Input()
	public isFormData: boolean = false;

	@Input()
	public newFields: Array<EntryNew> = [];

	@Input()
	public added?: any;

	newModalForm: FormGroup = new FormGroup({});

	ngOnInit() {
		this.newFields = this.newFields.filter((entry) => entry.name !== 'id');
	}

	ngOnDestroy() {
		this.removeSubscribers();
		if(this.modalNewLink) this.modalNewLink.unsubscribe();
	}

	public errors: any = {};

	protected subscribers: Array<any> = [];

	protected removeSubscribers() {
		this.subscribers.map((o) => {o.unsubscribe()});
		this.subscribers = [];
	}

	public refreshSettings() {
		this.removeSubscribers();

		const o = this.newFields.reduce((acc: any, newField) => {
			let opts: Array<any> = [];
			let formControl: any;

			if(newField.name === 'id') return acc;

			if(newField.required) opts.push(Validators.required);

			if(newField.type === 'select-multiple' || newField.type === 'file-upload') {
				formControl = new FormControl([], opts);
			} else if(newField.type === 'checkbox') {
				formControl = new FormControl(false, opts);
			} else {
				formControl = new FormControl('', opts);
			}

			acc[newField.formControlName] = formControl;
			this.subscribers.push(formControl.statusChanges.subscribe((status: any) => {
				this.errors[newField.formControlName] = status === 'VALID'?null:formControl.errors;
			}));

			return acc;
		}, {});

		this.newModalForm = new FormGroup(o);
	}

	protected getDataWithEditFn(data: any) {
		return this.newFields.reduce((acc: any, entry: any) => {
			if(entry.name === 'id') return acc;
			acc[entry.formControlName] = entry.newFn?entry.newFn(data[entry.name]):data[entry.name];
			return acc;
		}, {});
	}

	protected setFormValue(data: any) {
		let fields = this.newModalForm.controls;
		Object.keys(data).map((key) => {
			if(fields[key]) fields[key].setValue(data[key]);
		});
	}

	protected getFormData() {
		let fields = this.newModalForm.controls;
		return Object.keys(fields).reduce((formData: any, key) => {
			let data =fields[key].value;
			if(Array.isArray(data)) {
				for(let item of data) {
					formData.append(key+'[]', item);
				}
			} else {
				formData.append(key, data);
			}
			return formData;
		}, new FormData());
	}

	protected getFormValue() {
		let fields = this.newModalForm.controls;
		return Object.keys(fields).reduce((acc: any, key) => {
			acc[key] = fields[key].value===undefined?'':fields[key].value;
			return acc;
		}, {});
	}

	@Input()
	public fetchNewSave: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch New Save is NOT DEFINED')};;

	modalNewRef?: BsModalRef;
	modalNewLink: any;

	newError: any = false;
	newLoading: boolean = false;
	ended: boolean = false;

	onNew(e: Event, modal: any) {
		e.preventDefault();

		this.modalNewRef = this.modalService.show(modal, {animated: false});
		this.modalNewRef.setClass('modal-dialog-centered modal-xl');
		this.modalNewLink = this.modalNewRef.onHide?.subscribe((a: any) => {
			this.newError = false;
		});

		this.onNewAddContent({});
	}

	onModalNew: any;

	protected onNewAddContent(data: any) {
		this.setFormValue(this.getDataWithEditFn(data));

		this.onModalNew = (e: Event) => {
			e.preventDefault();

			if(this.newModalForm.valid) {
				this.newError = false;
				this.fetchNewSave({
					data: this.isFormData?this.getFormData():this.getFormValue(),
					successFn: (result: any) => {
						//this.ended = true;
						if(this.added && typeof this.added.added === 'function') this.added.added(result);
						this.modalNewRef?.hide();
					},
					errorLoadFn: (e: any) => {
						this.newError = e.reason || e.message;
					},
					startLoadFn: () => {
						this.newLoading = true;
					},
					endLoadFn: () => {
						this.newLoading = false;
					}
				});
			}
		}
	}

}
