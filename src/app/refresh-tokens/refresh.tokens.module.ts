import {NgModule} from '@angular/core';

import {RefreshTokensComponent} from './refresh.tokens.component';
import {RefreshTokensService} from './refresh.tokens.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
	],
	declarations: [
		RefreshTokensComponent,

	],
	providers: [
		RefreshTokensService,
	],
	exports: [
		RefreshTokensComponent,

	]
})
export class RefreshTokensModule {}
