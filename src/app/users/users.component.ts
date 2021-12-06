import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {UsersService} from './users.service';
import {RolesService} from '../roles/roles.service';

@Component({
	selector: 'users',
	templateUrl: './users.component.html',
	styleUrls: []
})
export class UsersComponent implements AfterViewInit {
	constructor(private usersService: UsersService, private rolesService: RolesService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	@ViewChild('modalSocialButton')
	public modalSocialButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "user", title: "user"},
		{name: "social_id", title: "sid"},
		{name: "email", title: "email"},
		{name: "blocked", title: "ban"},
		{name: "activated", title: "ver"},
		{name: "countUserLike", title: "likes"},
		{name: "roles", title: "roles", viewFn: (data: any) => {
			return data.filter((item:any) => item.UserRoles.selected).map((item: any) => item.title).join(', ');
		}},
	];

	public editFields: any = [
		{name: "id", title: "id", type: 'hidden', formControlName: 'id', required: true},
		{name: "user", title: 'Unique user name', type: 'input', formControlName: 'user'},
		{name: "social_id", title: 'Social ID+vendor', type: 'input', formControlName: 'social_id'},
		{name: "email", title: 'user email', type: 'input', formControlName: 'email'},
		{name: "blocked", title: 'The user is blocked?', type: 'checkbox', formControlName: 'blocked'},
		{name: "activated", title: 'The user is verification?', type: 'checkbox', formControlName: 'activated'},
		{name: "roles", title: 'roles(multiple!!!)', type: 'select-multiple', formControlName: 'roles', editFn: (data: any) => {
			return data.filter((item:any) => item.UserRoles.selected).map((item: any) => item.id);
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.rolesService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: entry.title}}));
				});
			})
		}}
	];

	public newFields: any = [
		{name: "user", title: 'Unique user name', type: 'input', formControlName: 'user'},
		{name: "password", title: 'User password', type: 'password', formControlName: 'password'},
		{name: "email", title: 'Unique user email', type: 'input', formControlName: 'email'},
		{name: "first_name", title: 'User First name', type: 'input', formControlName: 'first_name'},
		{name: "last_name", title: 'User Last name', type: 'input', formControlName: 'last_name'}
	];

	public newSocialFields: any = [
		{name: "social_id", title: 'User social ID', type: 'input', formControlName: 'social_id'},
		{name: "vendor", title: 'Vendor social ID', type: 'input', formControlName: 'vendor'},
		{name: "soft_create", title: 'Soft User create(Not ReWrite)', type: 'checkbox', formControlName: 'soft_create'},
		{name: "displayName", title: 'User Full name', type: 'input', formControlName: 'displayName'}
	];

	public fetch: any = async (o: any) => {
		await this.usersService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.usersService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.usersService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.usersService.fetch('add', o);
	}

	public fetchNewSocialSave: any = async(o: any) => {
		await this.usersService.fetch('add-social', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.usersService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.usersService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.usersService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
		this.modalSocialButton.refreshSettings();
	}
}
