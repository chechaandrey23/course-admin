import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {ReviewsService} from './reviews.service';
import {UsersService} from '../users/users.service';
import {GroupsService} from '../groups/groups.service';
import {TitlesService} from '../titles/titles.service';
import {TagsService} from '../tags/tags.service';

@Component({
	selector: 'reviews',
	templateUrl: './reviews.component.html',
	styleUrls: []
})
export class ReviewsComponent implements AfterViewInit {
	constructor(
		private readonly reviewsService:ReviewsService,
		private readonly usersService:UsersService,
		private readonly groupsService:GroupsService,
		private readonly titlesService:TitlesService,
		private readonly tagsService:TagsService
	) {
		this.service = this.reviewsService;
	}
	
	@ViewChild('baseTable')
	public baseTable: any;
	
	public querys: any = [
		{namespace: 'gets', method: 'GET', success: (data:any) => this.baseTable.injectData(data)},
		{namespace: 'add', method: 'POST', success: (data:any) => this.baseTable.injectOneData(data), error: (e: any) => this.baseTable.injectErrorAdd(e)},
		{namespace: 'edit', method: 'POST', success: (data:any) => this.baseTable.patchData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'remove', method: 'POST', success: (data:any) => this.baseTable.patchData(data), error: (e: any) => this.baseTable.filterError(e)},
		{namespace: 'delete', method: 'POST', success: (data:any) => this.baseTable.filterData(data), error: (e: any) => this.baseTable.filterError(e)},
	];
	
	public fields: any = [
		{name: "id", title: "id", width: 5},
		{name: "groupTitle", title:"title", width: 10, viewFn: (data: any) => {
			return data.group.group+'/'+data.title.title;
		}},
		//{name: "title", title: "title", width: 5, editTitle: 'title', editType: 'input', formControlName: 'title', editRequire: true},
		{name: "description", title: "description", width: 15, editTitle: 'Description', editType: 'textarea', formControlName: 'description', editRequire: true, viewFn: (data: any) => {return data.substring(0, 100)}},
		//{name: "text", title: "text", width: 5, editTitle: 'text review', editType: 'textarea', formControlName: 'text', editRequire: true, viewFn: (data: any) => {return data.substring(0, 255)}},
		{name: "authorRating", title: "AR", width: 5, editTitle: 'Author Rating', editType: 'select', formControlName: 'authorRating', editRequire: true, editReceiveFn: () => {
			return new Promise((res, rej) => {
				res([1,2,3,4,5,6,7,8,9,10].map((item) => {return {value: item, title: item}}))
			})
		}},
		{name: "averageEditorRating", title: "AER", width: 5},
		{name: "averageUserRating", title: "AUR", width: 5},
		{name: "user", title: "user", width: 10, viewFn: (entry: any) => {
			let datas: any = [];
			if(entry.user) datas.push(entry.user);
			if(entry.social_id) datas.push(entry.social_id);
			return datas.join('/');
		}, editTitle: 'author content', editType: 'select', formControlName: 'userId', editFn: (data: any) => {
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
		{name: "groupTitle", title: "G", width: 5, viewFn: (data: any) => {return data.group.group;}, editTitle: 'group', editType: 'select', formControlName: 'groupId', editFn: (data: any) => {
			return data.group.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				let obs = this.groupsService.source('short-gets', 'GET').subscribe((data: any) => {
					obs.unsubscribe();
					res(data.map((entry: any) => { return {value: entry.id, title: entry.group}}));
				});
				this.groupsService.get('short-gets');
			})
		}},
		{name: "groupTitle", title: "T", width: 5, viewFn: (data: any) => {return data.title.title;}, editTitle: 'title', editType: 'select', formControlName: 'titleId', editFn: (data: any) => {
			return data.title.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				let obs = this.titlesService.source('short-gets', 'GET').subscribe((data: any) => {
					obs.unsubscribe();
					res(data.map((entry: any) => { return {value: entry.id, title: entry.title}}));
				});
				this.titlesService.get('short-gets');
			})
		}},
		{name: "draft", title: "draft", width: 5, editTitle: 'is draft', editType: 'checkbox', formControlName: 'draft'},
		{name: "tags", title: "tags", width: 5, editTitle: 'tags', editType: 'multi-select', formControlName: 'tags', viewFn: (data: any) => {
			return data.map((item: any) => item.tag).join(', ');
		}, editFn: (data: any) => {
			return data.map((item: any) => item.id);
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				let obs = this.tagsService.source('short-gets', 'GET').subscribe((data: any) => {
					obs.unsubscribe();
					res(data.map((entry: any) => { return {value: entry.id, title: entry.tag}}));
				});
				this.tagsService.get('short-gets');
			})
		}}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
