import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {ThemesService} from './themes.service';

@Component({
	selector: 'themes',
	templateUrl: './themes.component.html',
	styleUrls: []
})
export class ThemesComponent implements AfterViewInit {
	constructor(private readonly groupsService:ThemesService) {
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
		{name: "theme", title: "theme", width: 10, editTitle: 'Unique theme name', editType: 'input', formControlName: 'theme', editRequire: true},
		{name: "title", title: "title", width: 20, editTitle: 'display name', editType: 'input', formControlName: 'title'},
		{name: "description", title: "description", width: 35, editTitle: 'Theme description', editType: 'textarea', formControlName: 'description', editFn: (data: any) => {return data;}, editReceiveFn: async () => {}}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
