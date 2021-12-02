import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {TagsService} from './tags.service';

@Component({
	selector: 'tags',
	templateUrl: './tags.component.html',
	styleUrls: []
})
export class TagsComponent implements AfterViewInit {
	constructor(private readonly tagsService:TagsService) {
		this.service = this.tagsService;
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
		{name: "tag", title: "tag", width: 60, editTitle: 'Unique tag name', editType: 'input', formControlName: 'tag', editRequire: true},
		{name: "countReview", title: "range", width: 10},
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
