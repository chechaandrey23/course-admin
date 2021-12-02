import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

export type TypeField = "input"|"textarea"|"select"|"multi-select"|"checkbox"|"file-upload"|"input-password";

export type TypeFn = () => Promise<Array<any>|any>;

@Component({
	selector: 'base-field-edit',
	templateUrl: './base.field.edit.component.html',
	styleUrls: []
})
export class BaseFieldEditComponent implements OnInit, OnDestroy {
	@Input()
	public fn: TypeFn|undefined = undefined;
	
	@Input()
	public type: TypeField = 'input';
	
	@Input()
	public control: AbstractControl|null = new FormControl('');
	
	public inProcess: boolean = false;
	
	public data: any;
	public isArray: boolean = false;
	
	ngOnInit() {
		if(this.fn) {
			this.inProcess = true;
			(this.fn as Function)().then((data: any) => {
				this.inProcess = false;
				this.isArray = Array.isArray(data);
				this.data = data;
			}).catch((e: any) => {console.log(e)});
		}
	}
	
	onFileChange(e: Event) {
		if((e!.target as any).files.length > 0) {
			const files = (e!.target as any).files;
			
			let fileSource: any = Array.prototype.reduce.call(files, (acc: any, value: any) => {acc.push(value); return acc;}, []);
			try {this.control!.patchValue(fileSource);} catch(e) {}
		}
	}
	
	ngOnDestroy() {}
}
