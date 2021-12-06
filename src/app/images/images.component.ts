import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {displayUser} from '../helpers/helper.display.user';

import {ImagesService} from './images.service';
import {UsersService} from '../users/users.service';
import {ReviewsService} from '../reviews/reviews.service';

@Component({
	selector: 'images',
	templateUrl: './images.component.html',
	styleUrls: []
})
export class ImagesComponent implements AfterViewInit {
	constructor(
		private imagesService:ImagesService,
		private usersService: UsersService,
	) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "user", title: "user", viewFn: (entry: any) => displayUser(entry || {})},
		{name: "url", title: "file url"},
		{name: "vendor", title: "vendor"}
	];

	public editFields: any = [
		{name: 'id', title: 'id', type: 'hidden', formControlName: 'id', required: true},
		{name: "user", title: "user", type: 'select', formControlName: 'userId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.usersService.fetch('short-user-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: displayUser(entry)}}));
				});
			})
		}}
	];

	public newFields: any = [
		{name: "user", title: "user", type: 'select', formControlName: 'userId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.usersService.fetch('short-editor-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: displayUser(entry)}}));
				});
			})
		}},
		{name: "url", title: 'images', type: 'file-upload', formControlName: 'images'}
	];

	public fetch: any = async (o: any) => {
		await this.imagesService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.imagesService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.imagesService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.imagesService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.imagesService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.imagesService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.imagesService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
