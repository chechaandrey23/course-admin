import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {ImagesService} from './images.service';
import {UsersService} from '../users/users.service';
import {ReviewsService} from '../reviews/reviews.service';

@Component({
	selector: 'images',
	templateUrl: './images.component.html',
	styleUrls: []
})
export class ImagesComponent implements AfterViewInit {
	constructor(
		private imagesService:ImagesService, 
		private usersService: UsersService,
		private reviewsService: ReviewsService,
	) {
		this.service = this.imagesService;
	}
	
	@ViewChild('baseTable')
	public baseTable: any;
	
	public querys: any = [
		{namespace: 'gets', method: 'GET', success: (data:any) => this.baseTable.injectData(data)},
		{namespace: 'add', method: 'POST', success: (data:any) => this.baseTable.injectAddData(data), error: (e: any) => this.baseTable.injectErrorAdd(e)},
		{namespace: 'remove', method: 'POST', success: (data:any) => this.baseTable.patchData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'delete', method: 'POST', success: (data:any) => this.baseTable.filterData(data), error: (e: any) => this.baseTable.filterError(e)},
		
	];
	
	public fields: any = [
		{name: "id", title: "id", width: 5},
		{name: "user", title: "user", width: 15, viewFn: (entry: any) => {
			let datas = [];
			if(entry.user) datas.push(entry.user);
			if(entry.social_id) datas.push(entry.social_id);
			return datas.join('/')
		}, editTitle: 'user', editType: 'select', formControlName: 'userId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				let obs = this.usersService.source('short-editor-gets', 'GET').subscribe((data: any) => {
					obs.unsubscribe();
					res(data.map((entry: any) => { 
						let datas: any = [];
						if(entry.user) datas.push(entry.user);
						if(entry.social_id) datas.push(entry.social_id);
						datas = datas.join('/')
						return {value: entry.id, title: datas}
					}));
				});
				this.usersService.get('short-editor-gets');
			})
		}},
		{name: "url", title: "file url", width: 55, editTitle: 'images', editType: 'file-upload', formControlName: 'images'}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
	//////////////////////////////////////////////////////
}
