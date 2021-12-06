import {NgModule} from '@angular/core';

import {TitleGroupsComponent} from './title.groups.component';
import {TitleGroupsService} from './title.groups.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
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
