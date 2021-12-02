import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UsersComponent} from './users.component';
import {UsersService} from './users.service';

import {BaseTableModule} from '../base-table/base.table.module';

@NgModule({
	imports: [
		BrowserModule,
		BaseTableModule,
		FormsModule,
		ReactiveFormsModule
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
