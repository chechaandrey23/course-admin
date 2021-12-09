import {Component, OnInit, OnDestroy, Input, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {Paginator} from '../helpers/paginator';

import {TypeField} from '../edit-field/edit.field.component';

export interface Entry {
	readonly name: string;
	readonly title: string;
	readonly viewFn?: (x:any) => any;
}

@Component({
	selector: 'view-search-table',
	templateUrl: './view.search.table.component.html',
	styleUrls: [],
	//styles: ['.view-table-hidden-field {display: none;}']
})
export class ViewSearchTableComponent implements OnInit, OnDestroy {

	constructor(private modalService: BsModalService) {}

	protected paginator: Paginator = new Paginator(20);

	// new search table

	@Input()
	public fields: Array<Entry> = [];

	@Input()
	public fetch: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch is NOT DEFINED')};

	@Input()
	public fetchMore: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch more is NOT DEFINED')};

	rowsLoading: Array<number> = [];

	public data: Array<any> = [];
	public dataLoading: boolean = false;

	ngOnInit() {
		this.fetch({
			successFn: (result: any) => {this.paginator.replace(this, 'data', result);/*this.data = result;*/},
			errorLoadFn: (e: any) => {console.error(e);},
			startLoadFn: () => {this.dataLoading = true},
			endLoadFn: () => {this.dataLoading = false}
		});
	}

	ngOnDestroy() {}

	public refreshSettings() {}

	moreLoading: boolean = false;

	public onMore(e: Event) {
		this.fetchMore({
			params: {
				page: this.paginator.getPageForQuery()
			},
			successFn: (result: any) => {this.paginator.addWithReplace(this, 'data', result);},
			errorLoadFn: (e: any) => {console.error(e);},
			startLoadFn: () => {this.moreLoading = true},
			endLoadFn: () => {this.moreLoading = false}
		});
	}

	@Input()
	public isWatch: boolean = true;

	@Input()
	public fetchDualFull: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch Dual Full more is NOT DEFINED')};

	fullLoading: boolean = false;

	fullData: any;
	idFullData: number = 0;

	public onWatch(e: Event, entry: any, index: number) {
		this.fetchDualFull({
			params: {
				reviewId: entry.id,
				searchId: entry.searchId
			},
			successFn: (result: any) => {
				this.fullData = {
					review: JSON.stringify(result.review, null, 2),
					index: JSON.stringify({body: result.index?.body}, null, 2)
				};
				this.idFullData = result.review.id;
			},
			errorLoadFn: (e: any) => {console.error(e);},
			startLoadFn: () => {
				this.fullLoading = true;
				this.rowsLoading = [...this.rowsLoading, entry.id];
			},
			endLoadFn: () => {
				this.fullLoading = false;
				this.rowsLoading = this.rowsLoading.filter((item) => item !== entry.id);
			}
		});
	}

	public onHide(e: Event, entry: any, index: number) {
		this.fullData = null;
		this.idFullData = 0;
	}

	@Input()
	public isCreateIndex: boolean = true;

	@Input()
	public fetchIndexing: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch Indexing more is NOT DEFINED')};

	indexingLoading: boolean = false;

	public onIndexing(e: Event, entry: any, index: number) {
		this.fetchIndexing({
			data: {
				reviewId: entry.id
			},
			successFn: (result: any) => {
				this.mutateData(result);
			},
			errorLoadFn: (e: any) => {console.error(e);},
			startLoadFn: () => {
				this.indexingLoading = true;
				this.rowsLoading = [...this.rowsLoading, entry.id];
			},
			endLoadFn: () => {
				this.indexingLoading = false;
				this.rowsLoading = this.rowsLoading.filter((item) => item !== entry.id);
			}
		});
	}

	@Input()
	public isDeleteIndex: boolean = true;

	@Input()
	public fetchDeleteIndex: (o: any) => Promise<void> = async () => {throw new Error('Callback Fetch Delete Index more is NOT DEFINED')};

	public onDeleteIndex(e: Event, entry: any, index: number) {
		this.fetchDeleteIndex({
			data: {
				reviewId: entry.id,
				searchId: entry.searchId
			},
			successFn: (result: any) => {
				this.mutateData(result);
			},
			errorLoadFn: (e: any) => {console.error(e);},
			startLoadFn: () => {
				this.rowsLoading = [...this.rowsLoading, entry.id];
			},
			endLoadFn: () => {
				this.rowsLoading = this.rowsLoading.filter((item) => item !== entry.id);
			}
		});
		this.fullData = null;
		this.idFullData = 0;
	}

	protected mutateData(data: any) {
		this.data = this.data.map((item) => {
			if(item.id == data.id) item = {...item, ...data};
			return item;
		});
	}
}
