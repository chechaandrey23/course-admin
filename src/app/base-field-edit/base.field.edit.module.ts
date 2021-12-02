import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatSelectModule} from '@angular/material/select';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {BaseFieldEditComponent} from '../base-field-edit/base.field.edit.component';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule
	],
	declarations: [
		BaseFieldEditComponent,
	],
	providers: [
	],
	exports: [
		BaseFieldEditComponent,
		
	]
})
export class BaseFieldEditModule {}
