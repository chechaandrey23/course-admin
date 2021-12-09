import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {displayUser} from '../helpers/helper.display.user';

import {SearchReviewsService} from './search.reviews.service';

@Component({
	selector: 'search-reviews',
	templateUrl: './search.reviews.component.html',
	styleUrls: []
})
export class SearchReviewsComponent implements AfterViewInit {
	constructor(private readonly searchReviewsService:SearchReviewsService) {}


	@ViewChild('viewSearchTable')
	public viewTable: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "groupTitle", title:"group/title", viewFn: (data: any) => (data.group.group+'/'+data.title.title)},
		{name: "description", title: "description", viewFn: (data: any) => {return data.substring(0, 100)}},
		{name: "user", title: "user", viewFn: (entry: any) => displayUser(entry || {})},
		{name: "draft", title: "draft"},
		{name: "blocked", title: "ban"},
		{name: "tags", title: "tags", viewFn: (data: any) => ((data || []).map((item: any) => item.tag).join(', '))}
	];

	public fetch: any = async (o: any) => {
		await this.searchReviewsService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.searchReviewsService.fetch('gets', o);
	}

	public fetchDualFull: any = async (o: any) => {
		await this.searchReviewsService.fetch('full-get', o);
	}

	public fetchIndexing: any = async (o: any) => {
		await this.searchReviewsService.fetch('indexing', o);
	}

	public fetchDeleteIndex: any = async (o: any) => {
		await this.searchReviewsService.fetch('delete-index', o);
	}

	ngAfterViewInit() {

	}
}
