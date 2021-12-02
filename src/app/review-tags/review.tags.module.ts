import {NgModule} from '@angular/core';

import {ReviewTagsComponent} from './review.tags.component';
import {ReviewTagsService} from './review.tags.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
	],
	declarations: [
		ReviewTagsComponent,
		
	],
	providers: [
		ReviewTagsService,
	],
	exports: [
		ReviewTagsComponent,
		
	]
})
export class ReviewTagsModule {}
