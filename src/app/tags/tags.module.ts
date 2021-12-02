import {NgModule} from '@angular/core';

import {TagsComponent} from './tags.component';
import {TagsService} from './tags.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
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
