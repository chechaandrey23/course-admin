import {NgModule} from '@angular/core';

import {ThemesComponent} from './themes.component';
import {ThemesService} from './themes.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
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
