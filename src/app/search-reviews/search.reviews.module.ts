import {NgModule} from '@angular/core';

import {ViewSearchTableModule} from '../view-search-table/view.search.table.module'

import {SearchReviewsComponent} from './search.reviews.component';
import {SearchReviewsService} from './search.reviews.service';

@NgModule({
	imports: [
		ViewSearchTableModule
	],
	declarations: [
		SearchReviewsComponent,
	],
	providers: [
		SearchReviewsService,
	],
	exports: [
		SearchReviewsComponent,
	]
})
export class SearchReviewsModule {}
