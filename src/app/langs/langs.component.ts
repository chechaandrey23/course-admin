import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {LangsService} from './langs.service';

@Component({
	selector: 'langs',
	templateUrl: './langs.component.html',
	styleUrls: []
})
export class LangsComponent implements AfterViewInit {
	constructor(private readonly langsService:LangsService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "lang", title: "lang"},
		{name: "title", title: "title"},
		{name: "description", title: "description"}
	];

	public editFields: any = [
		{name: 'id', title: 'id', type: 'hidden', formControlName: 'id', required: true},
		{name: "lang", title: "Unique lang name", type: 'input', formControlName: 'lang'},
		{name: "title", title: "display name", type: 'input', formControlName: 'title', editFn: (o: any) => {return o;}, editReceiveFn: async() => {}},
		{name: "description", title: "Lang description", type: 'textarea', formControlName: 'description'}
	];

	public fetch: any = async (o: any) => {
		await this.langsService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.langsService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.langsService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.langsService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.langsService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.langsService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.langsService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
