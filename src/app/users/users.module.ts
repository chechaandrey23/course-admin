import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UsersComponent} from './users.component';
import {UsersService} from './users.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,

		ViewTableModule,
		ButtonModalModule
	],
	declarations: [
		UsersComponent,

	],
	providers: [
		UsersService,
	],
	exports: [
		UsersComponent,

	]
})
export class UsersModule {}
