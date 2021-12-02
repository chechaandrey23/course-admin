import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {TitleGroupsService} from './title.groups.service';

@Component({
	selector: 'title-groups',
	templateUrl: './title.groups.component.html',
	styleUrls: []
})
export class TitleGroupsComponent implements AfterViewInit {
	constructor(private readonly titleGroupsService: TitleGroupsService) {
		this.service = this.titleGroupsService;
	}
	
	@ViewChild('baseTable')
	public baseTable: any;
	
	public querys: any = [
		{namespace: 'gets', method: 'GET', success: (data:any) => this.baseTable.injectData(data)},
	];
	
	public fields: any = [
		{name: "id", title: "id", width: 5},
		{name: "titleId", title: "titleId", width: 35},
		{name: "groupId", title: "groupId", width: 35}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
