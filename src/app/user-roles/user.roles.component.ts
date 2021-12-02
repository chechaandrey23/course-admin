import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {UserRolesService} from './user.roles.service';

@Component({
	selector: 'user-roles',
	templateUrl: './user.roles.component.html',
	styleUrls: []
})
export class UserRolesComponent implements AfterViewInit {
	constructor(private readonly userRolesService: UserRolesService) {
		this.service = this.userRolesService;
	}
	
	@ViewChild('baseTable')
	public baseTable: any;
	
	public querys: any = [
		{namespace: 'gets', method: 'GET', success: (data:any) => this.baseTable.injectData(data)},
	];
	
	public fields: any = [
		{name: "userId", title: "userId", width: 30},
		{name: "roleId", title: "roleId", width: 30},
		{name: "selected", title: "sel", width: 10}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
