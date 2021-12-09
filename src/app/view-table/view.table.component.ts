import {Component, OnInit, OnDestroy, Input, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Paginator} from '../helpers/paginator';

import {TypeField} from '../edit-field/edit.field.component';

export interface Entry {
	readonly name: string;
	readonly title: string;
	readonly viewFn?: (x:any) => any;
}

export interface EntryEdit {
	readonly name: string;
	readonly title: string;
	readonly type: TypeField;
	readonly formControlName: string;
	readonly editFn?: (x:any) => any;
	readonly required?: boolean;
	readonly editReceiveFn?: () => Promise<Array<any>|any>;
}

@Component({
	selector: 'view-table',
	templateUrl: './view.table.component.html',
	styleUrls: [],
	styles: ['.view-table-hidden-field {display: none;}']
})
export class ViewTableComponent implements OnInit, OnDestroy {

	constructor(private modalService: BsModalService) {}

	protected paginator: Paginator = new Paginator(20);

	@Input()
	public isFormData: boolean = false;

	@Input()
	public fields: Array<Entry> = [];

	@Input()
	public editFields: Array<EntryEdit> = [];

	@Input()
	public fetch: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch is NOT DEFINED')};

	@Input()
	public fetchMore: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch more is NOT DEFINED')};

	@Input()
	public fetchErase: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch ERASE is NOT DEFINED')};

	@Input()
	public isErase: boolean = false;

	@Input()
	public isEdit: boolean = true;

	@Input()
	public isRemove: boolean = true;

	@Input()
	public isDelete: boolean = true;

	editModalForm: FormGroup = new FormGroup({});

	rowsLoading: Array<number> = [];

	public data: Array<any> = [];
	public dataLoading: boolean = false;

	ngOnInit() {
		this.fetch({
			successFn: (result: any) => {this.paginator.replace(this, 'data', result);/*this.data = result;*/},
			errorLoadFn: (e: any) => {console.error(e);},
			startLoadFn: () => {this.dataLoading = true},
			endLoadFn: () => {this.dataLoading = false}
		});
	}

	ngOnDestroy() {
		this.removeSubscribers();
		if(this.modalEditLink) this.modalEditLink.unsubscribe();
	}

	public errors: any = {};

	protected subscribers: Array<any> = [];

	protected removeSubscribers() {
		this.subscribers.map((o) => {o.unsubscribe()});
		this.subscribers = [];
	}

	public refreshSettings() {
		this.removeSubscribers();

		const o = this.editFields.reduce((acc: any, editField) => {
			let opts: Array<any> = [];
			let formControl: any;

			if(editField.required) opts.push(Validators.required);

			if(editField.type === 'select-multiple' || editField.type === 'file-upload') {
				formControl = new FormControl([], opts);
			} else if(editField.type === 'checkbox') {
				formControl = new FormControl(false, opts);
			} else {
				formControl = new FormControl('', opts);
			}

			acc[editField.formControlName] = formControl;
			this.subscribers.push(formControl.statusChanges.subscribe((status: any) => {
				this.errors[editField.formControlName] = status === 'VALID'?null:formControl.errors;
			}));

			return acc;
		}, {});

		this.editModalForm = new FormGroup(o);
	}

	protected getDataWithEditFn(data: any) {
		return this.editFields.reduce((acc: any, entry: any) => {
			acc[entry.formControlName] = entry.editFn?entry.editFn(data[entry.name]):data[entry.name];
			return acc;
		}, {});
	}

	protected setFormValue(data: any) {
		let fields = this.editModalForm.controls;
		Object.keys(data).map((key) => {
			if(fields[key]) fields[key].setValue(data[key]);
		});
	}

	protected getFormData() {
		let fields = this.editModalForm.controls;
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
		let fields = this.editModalForm.controls;
		return Object.keys(fields).reduce((acc: any, key) => {
			acc[key] = fields[key].value;
			return acc;
		}, {});
	}

	@Input()
	public fetchEdit?: (o: any) => Promise<void>;

	@Input()
	public fetchEditSave: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch Edit Save is NOT DEFINED')};;

	modalEditRef?: BsModalRef;
	modalEditLink: any;

	editError: any = false;
	editLoading: boolean = false;

	onEdit(e: Event, modal: any, entry: any, index: number) {
		e.preventDefault();

		this.modalEditRef = this.modalService.show(modal, {animated: false});
		this.modalEditRef.setClass('modal-dialog-centered modal-xl');
		this.modalEditLink = this.modalEditRef.onHide?.subscribe((a: any) => {this.editError = false;});

		if(this.fetchEdit) {
			this.fetchEdit({
				params: {
					id: entry.id
				},
				successFn: (result: any) => {
					this.onEditAddContent(result);
				},
				startLoadFn: () => {
					this.editLoading = true;
					this.rowsLoading = [...this.rowsLoading, entry.id];
				},
				endLoadFn: () => {
					this.editLoading = false;
					this.rowsLoading = this.rowsLoading.filter((item) => item !== entry.id);
				}
			});
		} else {
			this.onEditAddContent(entry);
		}
	}

	onModalEdit: any;

	protected onEditAddContent(data: any) {
		this.setFormValue(this.getDataWithEditFn(data));

		this.onModalEdit = (e: Event) => {
			e.preventDefault();

			if(this.editModalForm.valid) {
				this.editError = false;
				this.fetchEditSave({
					data: this.isFormData?this.getFormData():this.getFormValue(),
					successFn: (result: any) => {
						this.replaceData(result);
						this.modalEditRef?.hide();
					},
					errorLoadFn: (e: any) => {
						this.editError = e.reason || e.message;
					},
					startLoadFn: () => {
						this.editLoading = true;
						this.rowsLoading = [...this.rowsLoading, data.id];
					},
					endLoadFn: () => {
						this.editLoading = false;
						this.rowsLoading = this.rowsLoading.filter((item) => item !== data.id);
					}
				});
			}
		}
	}

	protected replaceData(data: any) {
		this.data = this.data.map((item) => {
			return (item.id == data.id)?data:item;
		});
	}

	public added(data: any) {
		this.paginator.append(this, 'data', Array.isArray(data)?data:[data]);
		//this.data = [data, ...this.data];
	}

	@Input()
	public fetchRemove: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch Remove is NOT DEFINED')};

	@Input()
	public fetchRestore: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch Restore is NOT DEFINED')};

	public onRemove(e: Event, entry: any, index: number) {
		this.fetchRemove({
			data: {id: entry.id},
			successFn: (result: any) => {
				this.mutateData(result);
			},
			errorLoadFn: (e: any) => {
				console.error(e);
			},
			startLoadFn: () => {
				this.rowsLoading = [...this.rowsLoading, entry.id];
			},
			endLoadFn: () => {
				this.rowsLoading = this.rowsLoading.filter((item) => item !== entry.id);
			}
		});
	}

	public onRestore(e: Event, entry: any, index: number) {
		this.fetchRestore({
			data: {id: entry.id},
			successFn: (result: any) => {
				this.mutateData(result);
			},
			errorLoadFn: (e: any) => {
				console.error(e);
			},
			startLoadFn: () => {
				this.rowsLoading = [...this.rowsLoading, entry.id];
			},
			endLoadFn: () => {
				this.rowsLoading = this.rowsLoading.filter((item) => item !== entry.id);
			}
		});
	}

	public onErase(e: Event, entry: any, index: number) {
		this.fetchErase({
			data: {id: entry.id},
			successFn: (result: any) => {
				this.mutateData(result);
			},
			errorLoadFn: (e: any) => {
				console.error(e);
			},
			startLoadFn: () => {
				this.rowsLoading = [...this.rowsLoading, entry.id];
			},
			endLoadFn: () => {
				this.rowsLoading = this.rowsLoading.filter((item) => item !== entry.id);
			}
		});
	}

	protected mutateData(data: any) {
		this.data = this.data.map((item) => {
			if(item.id == data.id) item = {...item, ...data};
			return item;
		});
	}

	modalDeleteRef?: BsModalRef;
	deletedId: number = 0;
	onModalDelete: any;

	@Input()
	public fetchDelete: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch Delete is NOT DEFINED')};

	public onDelete(e: Event, modal: any, entry: any, index: number) {
		e.preventDefault();

		this.modalDeleteRef = this.modalService.show(modal, {animated: false});
		this.modalDeleteRef.setClass('modal-dialog-centered modal-lg');

		this.deletedId = entry.id;

		this.onModalDelete = (e: Event) => {
			e.preventDefault();

			this.fetchDelete({
				data: {id: entry.id},
				successFn: (result: any) => {
					this.filterData(result);
				},
				errorLoadFn: (e: any) => {
					console.error(e);
				},
				startLoadFn: () => {
					this.rowsLoading = [...this.rowsLoading, entry.id];
				},
				endLoadFn: () => {
					this.rowsLoading = this.rowsLoading.filter((item) => item !== entry.id);
				}
			});

			this.modalDeleteRef?.hide();
		}
	}

	protected filterData(data: any) {
		this.paginator.remove(this, 'data', (entry: any) => entry.id !== data.id);
		//this.data = this.data.filter((entry) => entry.id !== data.id);
	}

	moreLoading: boolean = false;

	public onMore(e: Event) {
		this.fetchMore({
			params: {
				page: this.paginator.getPageForQuery()
			},
			successFn: (result: any) => {this.paginator.addWithReplace(this, 'data', result);},
			errorLoadFn: (e: any) => {console.error(e);},
			startLoadFn: () => {this.moreLoading = true},
			endLoadFn: () => {this.moreLoading = false}
		});
	}

}
