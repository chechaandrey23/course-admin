import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {UsersService} from './users.service';
import {RolesService} from '../roles/roles.service';

@Component({
	selector: 'users',
	templateUrl: './users.component.html',
	styleUrls: []
})
export class UsersComponent implements AfterViewInit {
	constructor(private usersService: UsersService, private rolesService: RolesService, private modalService: NgbModal) {
		this.service = this.usersService;
	}
	
	@ViewChild('baseTable')
	public baseTable: any;
	
	public querys: any = [
		{namespace: 'gets', method: 'GET', success: (data:any) => this.baseTable.injectData(data)},
		{namespace: 'edit', method: 'POST', success: (data:any) => this.baseTable.patchData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'remove', method: 'POST', success: (data:any) => this.baseTable.patchData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'delete', method: 'POST', success: (data:any) => this.baseTable.filterData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'add-social', method: 'POST', success: (data:any) => {
			this.baseTable.injectOneData(data);
			this.addSocialProcess = false;
			this.addModalSocialRef.close();
		}, error: (e: any) => {
			this.addSocialError = e.error.reason;
			this.addSocialProcess = false;
		}},
		{namespace: 'add', method: 'POST', success: (data:any) => {
			this.baseTable.injectOneData(data);
			this.addClassicProcess = false;
			this.addModalClassicRef.close();
		}, error: (e: any) => {
			this.addClassicError = e.error.reason;
			this.addClassicProcess = false;
		}},
	];
	
	public fields: any = [
		{name: "id", title: "id", width: 5},
		{name: "user", title: "user", width: 15, editTitle: 'Unique user name', editType: 'input', formControlName: 'user'},
		{name: "social_id", title: "sid", width: 15, editTitle: 'Social ID+vendor', editType: 'input', formControlName: 'social_id'},
		{name: "email", title: "email", width: 10, editTitle: 'user email', editType: 'input', formControlName: 'email'},
		{name: "blocked", title: "ban", width: 5, editTitle: 'The user is blocked?', editType: 'checkbox', formControlName: 'blocked'},
		{name: "activated", title: "ver", width: 5, editTitle: 'The user is verification?', editType: 'checkbox', formControlName: 'activated'},
		{name: "countUserLike", title: "likes", width: 5},
		{name: "roles", title: "roles", width: 15, editTitle: 'roles(multiple!!!)', editType: 'multi-select', formControlName: 'roles', viewFn: (data: any) => {
			return data.filter((item:any) => item.UserRoles.selected).map((item: any) => item.title).join(', ');
		}, editFn: (data: any) => {
			return data.filter((item:any) => item.UserRoles.selected).map((item: any) => item.id);
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				let obs = this.rolesService.source('short-gets', 'GET').subscribe((data: any) => {
					obs.unsubscribe();
					res(data.map((entry: any) => { return {value: entry.id, title: entry.title}}));
				});
				this.rolesService.get('short-gets');
			})
		}},
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
	
	// ..............................
	addSocialProcess: boolean = false;
	addClassicProcess: boolean = false;
	
	addModalSocialRef: any;
	addModalClassicRef: any;
	
	modalSocialForm:FormGroup = new FormGroup({
		id: new FormControl(''),
		vendor: new FormControl('')
	});
	
	addSocialError: string = '';
	
	modalClassicForm:FormGroup = new FormGroup({
		user: new FormControl(''),
		password: new FormControl(''),
		email: new FormControl('')
	});
	
	addClassicError: string = '';
	
	onCreateSocial(e: Event, modal: any) {
		e.preventDefault();
		const modalRef = this.modalService.open(modal, {size: 'lg'});
		modalRef.result.then((result) => {}, (reason) => {this.addSocialError = '';});
		this.addModalSocialRef = modalRef;
		
		this.modalSocialForm.controls.id.setValue('');
		this.modalSocialForm.controls.vendor.setValue('');
	}
	
	onModalCreateSocial(e: Event) {
		e.preventDefault();
		if(this.modalSocialForm.valid) {
			this.service!.post('add-social', {
				social_id: this.modalSocialForm.controls.id.value, 
				vendor: this.modalSocialForm.controls.vendor.value
			});
			this.addSocialProcess = true;
			this.addSocialError = '';
		}
	}
	
	onCreateClassic(e: Event, modal: any) {
		e.preventDefault();
		const modalRef = this.modalService.open(modal, {size: 'lg'});
		modalRef.result.then((result) => {}, (reason) => {this.addClassicError = '';});
		this.addModalClassicRef = modalRef;
		
		this.modalClassicForm.controls.user.setValue('');
		this.modalClassicForm.controls.password.setValue('');
		this.modalClassicForm.controls.email.setValue('');
	}
	
	onModalCreateClassic(e: Event) {
		e.preventDefault();
		if(this.modalClassicForm.valid) {
			this.service!.post('add', {
				user: this.modalClassicForm.controls.user.value, 
				password: this.modalClassicForm.controls.password.value,
				email: this.modalClassicForm.controls.email.value
			});
			this.addClassicProcess = true;
			this.addClassicError = '';
		}
	}
}
