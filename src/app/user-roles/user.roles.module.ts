import {NgModule} from '@angular/core';

import {UserRolesComponent} from './user.roles.component';
import {UserRolesService} from './user.roles.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
	],
	declarations: [
		UserRolesComponent,

	],
	providers: [
		UserRolesService,
	],
	exports: [
		UserRolesComponent,

	]
})
export class UserRolesModule {}
