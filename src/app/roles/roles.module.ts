import {NgModule} from '@angular/core';

import {RolesComponent} from './roles.component';
import {RolesService} from './roles.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
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
