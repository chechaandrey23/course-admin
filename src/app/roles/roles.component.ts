import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {RolesService} from './roles.service';

@Component({
	selector: 'roles',
	templateUrl: './roles.component.html',
	styleUrls: []
})
export class RolesComponent implements AfterViewInit {
	constructor(private readonly rolesService:RolesService) {
		this.service = this.rolesService;
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
		{name: "role", title: "role", width: 10, editTitle: 'UID role', editType: 'input', formControlName: 'role', editRequire: true},
		{name: "title", title: "title", width: 20, editTitle: 'Title role', editType: 'input', formControlName: 'title'},
		{name: "description", title: "description", width: 35, editTitle: 'Group description', editType: 'textarea', formControlName: 'description'}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
