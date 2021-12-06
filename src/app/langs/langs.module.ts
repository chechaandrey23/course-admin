import {NgModule} from '@angular/core';

import {LangsComponent} from './langs.component';
import {LangsService} from './langs.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
	],
	declarations: [
		LangsComponent,

	],
	providers: [
		LangsService,
	],
	exports: [
		LangsComponent,
	]
})
export class LangsModule {}
