import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {displayUser} from '../helpers/helper.display.user';

import {UserInfosService} from './user-infos.service';
import {ThemesService} from '../themes/themes.service';
import {LangsService} from '../langs/langs.service';
import {UsersService} from '../users/users.service';

@Component({
	selector: 'user-infos',
	templateUrl: './user-infos.component.html',
	styleUrls: []
})
export class UserInfosComponent implements AfterViewInit {
	constructor(
		private userInfosService:UserInfosService,
		private themesService: ThemesService,
		private langsService: LangsService,
		private usersService: UsersService
	) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "user", title: "user", viewFn: (entry: any) => displayUser(entry)},
		{name: "first_name", title: "name"},
		{name: "last_name", title: "family"},
		{name: "lang", title: "lang", viewFn: (data: any) => `${data.lang} => ${data.title}`},
		{name: "theme", title: "theme", viewFn: (data: any) => `${data.theme} => ${data.title}`}
	];

	public editFields: any = [
		{name: 'id', title: 'id', type: 'hidden', formControlName: 'id', required: true},
		{name: "user", title: "user id", type: 'select', formControlName: 'userId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.usersService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: displayUser(entry)}}));
				});
			})
		}},
		{name: "first_name", title: "first name", type: 'input', formControlName: 'first_name'},
		{name: "last_name", title: "last name", type: 'input', formControlName: 'last_name'},
		{name: "lang", title: "lang user", type: 'select', formControlName: 'langId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.langsService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: entry.title}}));
				});
			})
		}},
		{name: "theme", title: "theme user", type: 'select', formControlName: 'themeId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.themesService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: entry.title}}));
				});
			})
		}}
	];

	public newFields: any = [
		{name: "user", title: "user id", type: 'select', formControlName: 'userId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.usersService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: displayUser(entry)}}));
				});
			})
		}}
	];

	public fetch: any = async (o: any) => {
		await this.userInfosService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.userInfosService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.userInfosService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.userInfosService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.userInfosService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.userInfosService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.userInfosService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
