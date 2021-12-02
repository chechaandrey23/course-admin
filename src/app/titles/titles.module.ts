import {NgModule} from '@angular/core';

import {TitlesComponent} from './titles.component';
import {TitlesService} from './titles.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
	],
	declarations: [
		TitlesComponent,
		
	],
	providers: [
		TitlesService,
	],
	exports: [
		TitlesComponent,
		
	]
})
export class TitlesModule {}
