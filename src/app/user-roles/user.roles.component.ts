import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {displayUser} from '../helpers/helper.display.user';

import {UserRolesService} from './user.roles.service';

@Component({
	selector: 'user-roles',
	templateUrl: './user.roles.component.html',
	styleUrls: []
})
export class UserRolesComponent implements AfterViewInit {
	constructor(private readonly userRolesService: UserRolesService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "user", title: "userId", viewFn: (user: any) => `${user?.id} => ${displayUser(user || {})}`},
		{name: "role", title: "roleId", viewFn: (role: any) => `${role.id} => ${role.role}:${role.title}`},
		{name: "selected", title: "selected"},
	];

	public fetch: any = async (o: any) => {
		await this.userRolesService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.userRolesService.fetch('gets', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
	}
}
