import {NgModule} from '@angular/core';

import {LangsComponent} from './langs.component';
import {LangsService} from './langs.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
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
