import {NgModule} from '@angular/core';

import {ReviewTagsComponent} from './review.tags.component';
import {ReviewTagsService} from './review.tags.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
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
