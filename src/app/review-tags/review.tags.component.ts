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
	constructor(private readonly reviewTagsService: ReviewTagsService) {
		this.service = this.reviewTagsService;
	}
	
	@ViewChild('baseTable')
	public baseTable: any;
	
	public querys: any = [
		{namespace: 'gets', method: 'GET', success: (data:any) => this.baseTable.injectData(data)},
	];
	
	public fields: any = [
		{name: "reviewId", title: "reviewId", width: 40},
		{name: "tagId", title: "tagId", width: 35}
	];
	
	public service: any;
	
	ngAfterViewInit() {
		this.baseTable.refreshSettings();
	}
}
