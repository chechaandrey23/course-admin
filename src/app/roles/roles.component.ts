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
	constructor(private readonly rolesService:RolesService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "role", title: "role"},
		{name: "title", title: "title"},
		{name: "description", title: "description"}
	];

	public editFields: any = [
		{name: 'id', title: 'id', type: 'hidden', formControlName: 'id', required: true},
		{name: "role", title: "UID role", type: 'input', formControlName: 'role'},
		{name: "title", title: "Title role", type: 'input', formControlName: 'title', editFn: (o: any) => {return o;}, editReceiveFn: async() => {}},
		{name: "description", title: "Role description", type: 'textarea', formControlName: 'description'}
	];

	public fetch: any = async (o: any) => {
		await this.rolesService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.rolesService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.rolesService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.rolesService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.rolesService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.rolesService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.rolesService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
