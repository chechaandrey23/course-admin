import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

export type TypeField = "input"|"textarea"|"select"|"select-multiple"|"checkbox"|"file-upload"|"password"|"hidden";

export type TypeFn = () => Promise<Array<any>|any>;

@Component({
	selector: 'edit-field',
	templateUrl: './edit.field.component.html',
	styleUrls: []
})
export class EditFieldComponent implements OnInit, OnDestroy {
	@Input()
	public fn: TypeFn|undefined = undefined;

	@Input()
	public type: TypeField = 'input';

	@Input()
	public control: AbstractControl|null = new FormControl('');

	@Input()
	public valid: boolean = true;

	public fieldLoading: boolean = false;

	public data: any;
	public isArrayData: boolean = false;

	ngOnInit() {
		if(this.fn) {
			this.fieldLoading = true;
			(this.fn as Function)().then((data: any) => {
				this.fieldLoading = false;
				this.isArrayData = Array.isArray(data);
				this.data = data;
			}).catch((e: any) => {
				console.error(e);
			});
		}
	}

	onFileChange(e: Event) {
		if((e!.target as any).files.length > 0) {
			const files = (e!.target as any).files;

			let fileSource: any = Array.prototype.reduce.call(files, (acc: any, value: any) => {acc.push(value); return acc;}, []);
			try {
				this.control!.patchValue(fileSource);
			} catch(e) {}
		}
	}

	ngOnDestroy() {}
}
