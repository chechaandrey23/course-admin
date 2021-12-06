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
	constructor(private readonly groupsService:GroupsService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "group", title: "group"},
		{name: "description", title: "description"}
	];

	public editFields: any = [
		{name: 'id', title: 'id', type: 'hidden', formControlName: 'id', required: true},
		{name: "group", title: "Unique group name", type: 'input', formControlName: 'group'},
		{name: "description", title: "Groupt description", type: 'textarea', formControlName: 'description'}
	];

	public fetch: any = async (o: any) => {
		await this.groupsService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.groupsService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.groupsService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.groupsService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.groupsService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.groupsService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.groupsService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
