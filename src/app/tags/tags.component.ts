import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {TagsService} from './tags.service';

@Component({
	selector: 'tags',
	templateUrl: './tags.component.html',
	styleUrls: []
})
export class TagsComponent implements AfterViewInit {
	constructor(private readonly tagsService:TagsService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "tag", title: "tag"},
		{name: "countReview", title: "range"}
	];

	public editFields: any = [
		{name: "id", title: 'id', type: 'hidden', formControlName: 'id', required: true},
		{name: "tag", title: 'Unique tag name', type: 'input', formControlName: 'tag'}
	];

	public fetch: any = async (o: any) => {
		await this.tagsService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.tagsService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.tagsService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.tagsService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.tagsService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.tagsService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.tagsService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
