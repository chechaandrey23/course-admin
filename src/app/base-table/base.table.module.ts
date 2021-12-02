import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BaseTableComponent} from './base.table.component';

import {BaseFieldEditModule} from '../base-field-edit/base.field.edit.module';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		NgbModule,
		BaseFieldEditModule
	],
	declarations: [
		BaseTableComponent,
		
	],
	providers: [],
	exports: [
		BaseTableComponent,
		
	]
})
export class BaseTableModule {}
