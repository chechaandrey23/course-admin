import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {GroupsService} from './groups.service';

@Component({
	selector: 'groups',
	templateUrl: './groups.component.html',
	styleUrls: []
})
export class GroupsComponent implements AfterViewInit {
	constructor(private readonly groupsService:GroupsService) {
		this.service = this.groupsService;
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
		{name: "group", title: "group", width: 25, editTitle: 'Unique group name', editType: 'input', formControlName: 'group', editRequire: true, viewFn: (data: any) => {return data;}},
		{name: "description", title: "description", width: 45, editTitle: 'Group description', editType: 'textarea', formControlName: 'description', editFn: (data: any) => {return data;}, editReceiveFn: async () => {}}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
