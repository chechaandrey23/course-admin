import {NgModule} from '@angular/core';

import {TagsComponent} from './tags.component';
import {TagsService} from './tags.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
	],
	declarations: [
		TagsComponent,

	],
	providers: [
		TagsService,
	],
	exports: [
		TagsComponent,

	]
})
export class TagsModule {}
