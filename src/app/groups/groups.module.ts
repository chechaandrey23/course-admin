import {NgModule} from '@angular/core';

import {GroupsComponent} from './groups.component';
import {GroupsService} from './groups.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
	],
	declarations: [
		GroupsComponent,
		
	],
	providers: [
		GroupsService,
	],
	exports: [
		GroupsComponent,
		
	]
})
export class GroupsModule {}
