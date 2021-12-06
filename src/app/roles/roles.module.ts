import {NgModule} from '@angular/core';

import {RolesComponent} from './roles.component';
import {RolesService} from './roles.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
	],
	declarations: [
		RolesComponent,

	],
	providers: [
		RolesService,
	],
	exports: [
		RolesComponent,

	]
})
export class RolesModule {}
