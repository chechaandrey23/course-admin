import {NgModule} from '@angular/core';

import {TitleGroupsComponent} from './title.groups.component';
import {TitleGroupsService} from './title.groups.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
	],
	declarations: [
		TitleGroupsComponent,
		
	],
	providers: [
		TitleGroupsService,
	],
	exports: [
		TitleGroupsComponent,
		
	]
})
export class TitleGroupsModule {}
