import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserInfosComponent} from './user-infos.component';
import {UserInfosService} from './user-infos.service';

import {BaseTableModule} from '../base-table/base.table.module';

import {BaseFieldEditModule} from '../base-field-edit/base.field.edit.module';

@NgModule({
	imports: [
		BaseTableModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		
		BaseFieldEditModule
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
