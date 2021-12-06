import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserInfosComponent} from './user-infos.component';
import {UserInfosService} from './user-infos.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,

		ViewTableModule,
		ButtonModalModule
	],
	declarations: [
		UserInfosComponent,

	],
	providers: [
		UserInfosService,
	],
	exports: [
		UserInfosComponent,

	]
})
export class UserInfosModule {}
