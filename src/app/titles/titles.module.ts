import {NgModule} from '@angular/core';

import {TitlesComponent} from './titles.component';
import {TitlesService} from './titles.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
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
