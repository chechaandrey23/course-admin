import {NgModule} from '@angular/core';

import {ThemesComponent} from './themes.component';
import {ThemesService} from './themes.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BaseTableModule
	],
	declarations: [
		ThemesComponent,
		
	],
	providers: [
		ThemesService,
	],
	exports: [
		ThemesComponent,
		
	]
})
export class ThemesModule {}
