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
	constructor(private readonly titlesService: TitlesService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "title", title: "title"},
		{name: "description", title: "description"}
	];

	public editFields: any = [
		{name: 'id', title: 'id', type: 'hidden', formControlName: 'id', required: true},
		{name: "title", title: "Unique title name", type: 'input', formControlName: 'title'},
		{name: "description", title: "Theme description", type: 'textarea', formControlName: 'description'}
	];

	public fetch: any = async (o: any) => {
		await this.titlesService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.titlesService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.titlesService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.titlesService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.titlesService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.titlesService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.titlesService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
