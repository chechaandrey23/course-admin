import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Observable, Subscriber} from 'rxjs';

import {ReviewTagsService} from './review.tags.service';

@Component({
	selector: 'review-tags',
	templateUrl: './review.tags.component.html',
	styleUrls: []
})
export class ReviewTagsComponent implements AfterViewInit {
	constructor(private readonly reviewTagsService: ReviewTagsService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "review", title: "group/title", viewFn: (review: any) => (review?.id+' => '+review?.groupTitle?.group?.group+'/'+review?.groupTitle?.title?.title)},
		{name: "tag", title: "tag", viewFn: (tag: any) => `${tag?.id} => ${tag?.tag}`},
		{name: "selected", title: "selected"}
	];

	public fetch: any = async (o: any) => {
		await this.reviewTagsService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.reviewTagsService.fetch('gets', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
	}
}
