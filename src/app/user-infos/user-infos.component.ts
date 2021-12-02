import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {UserInfosService} from './user-infos.service';
import {ThemesService} from '../themes/themes.service';
import {LangsService} from '../langs/langs.service';
import {UsersService} from '../users/users.service';

@Component({
	selector: 'user-infos',
	templateUrl: './user-infos.component.html',
	styleUrls: []
})
export class UserInfosComponent implements AfterViewInit {
	constructor(
		private userInfosService:UserInfosService, 
		private themesService: ThemesService, 
		private langsService: LangsService, 
		private usersService: UsersService,
		private modalService: NgbModal
	) {
		this.service = this.userInfosService;
	}
	
	@ViewChild('baseTable')
	public baseTable: any;
	
	public querys: any = [
		{namespace: 'gets', method: 'GET', success: (data:any) => this.baseTable.injectData(data)},
		{namespace: 'edit', method: 'POST', success: (data:any) => this.baseTable.patchData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'remove', method: 'POST', success: (data:any) => this.baseTable.patchData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'delete', method: 'POST', success: (data:any) => this.baseTable.filterData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'add', method: 'POST', success: (data:any) => {
			this.baseTable.injectOneData(data);
			this.addProcess = false;
			this.addModalRef.close();
		}, error: (e: any) => {
			this.addError = e.error.reason;
			this.addProcess = false;
		}}
	];
	
	public fields: any = [
		{name: "id", title: "id", width: 5},
		{name: "user", title: "user", width: 20, viewFn: (entry: any) => {//entry = entry || {};
			let datas = [];
			if(entry.user) datas.push(entry.user);
			if(entry.social_id) datas.push(entry.social_id);
			return datas.join('/')
		}},
		{name: "first_name", title: "name", width: 15, editTitle: 'first name', editType: 'input', formControlName: 'first_name'},
		{name: "last_name", title: "family", width: 15, editTitle: 'last name', editType: 'input', formControlName: 'last_name'},
		{name: "lang", title: "lang", width: 10, editTitle: 'lang user', editType: 'select', formControlName: 'lang', viewFn: (data: any) => {
			return data.title;
		}, editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				let obs = this.langsService.source('short-gets', 'GET').subscribe((data: any) => {
					obs.unsubscribe();
					res(data.map((entry: any) => { return {value: entry.id, title: entry.title}}));
				});
				this.langsService.get('short-gets');
			})
		}},
		{name: "theme", title: "theme", width: 10, editTitle: 'theme user', editType: 'select', formControlName: 'theme', viewFn: (data: any) => {
			return data.title;
		}, editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				let obs = this.themesService.source('short-gets', 'GET').subscribe((data: any) => {
					obs.unsubscribe();
					res(data.map((entry: any) => { return {value: entry.id, title: entry.title}}));
				});
				this.themesService.get('short-gets');
			})
		}},
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
	//////////////////////////////////////////////////////
	editReceiveFn: any = () => {
		return new Promise((res, rej) => {
			let obs = this.usersService.source('short-gets', 'GET').subscribe((data: any) => {
				obs.unsubscribe();
				res(data.map((entry: any) => {
					let datas = [];
					if(entry.user) datas.push(entry.user);
					if(entry.social_id) datas.push(entry.social_id);
					return {value: entry.id, title: datas.join(' / ')}
				}));
			});
			this.usersService.get('short-gets');
		})
	}
	
	addProcess: boolean = false;
	
	addModalRef: any;
	
	modalForm:FormGroup = new FormGroup({
		userId: new FormControl('')
	});
	
	addError: string = '';
	
	onCreate(e: Event, modal: any) {
		e.preventDefault();
		const modalRef = this.modalService.open(modal, {size: 'lg'});
		modalRef.result.then((result) => {}, (reason) => {this.addError = '';});
		this.addModalRef = modalRef;
		
		this.modalForm.controls.userId.setValue(null);
	}
	
	onModalCreate(e: Event) {
		e.preventDefault();
		if(this.modalForm.valid) {
			this.service!.post('add', {
				userId: this.modalForm.controls.userId.value,
			});
			this.addProcess = true;
			this.addError = '';
		}
	}
}
