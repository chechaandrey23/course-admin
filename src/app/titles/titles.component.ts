import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {TitlesService} from './titles.service';

@Component({
	selector: 'titles',
	templateUrl: './titles.component.html',
	styleUrls: []
})
export class TitlesComponent implements AfterViewInit {
	constructor(private readonly titlesService: TitlesService) {
		this.service = this.titlesService;
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
		{name: "title", title: "title", width: 25, editTitle: 'Unique title name', editType: 'input', formControlName: 'title', editRequire: true, viewFn: (data: any) => {return data;}},
		{name: "description", title: "description", width: 45, editTitle: 'Title description', editType: 'textarea', formControlName: 'description', editFn: (data: any) => {return data;}}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
