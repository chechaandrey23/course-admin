import {NgModule} from '@angular/core';

import {GroupsComponent} from './groups.component';
import {GroupsService} from './groups.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
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
