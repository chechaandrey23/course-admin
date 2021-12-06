import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {TitleGroupsService} from './title.groups.service';

@Component({
	selector: 'title-groups',
	templateUrl: './title.groups.component.html',
	styleUrls: []
})
export class TitleGroupsComponent implements AfterViewInit {
	constructor(private readonly titleGroupsService: TitleGroupsService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "title", title: "titleId", viewFn: (title: any) => `${title.id} => ${title.title}`},
		{name: "group", title: "groupId", viewFn: (group: any) => `${group.id} => ${group.group}`}
	];

	public fetch: any = async (o: any) => {
		await this.titleGroupsService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.titleGroupsService.fetch('gets', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
	}
}
