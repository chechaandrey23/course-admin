import {NgModule} from '@angular/core';

import {UserRolesComponent} from './user.roles.component';
import {UserRolesService} from './user.roles.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
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
