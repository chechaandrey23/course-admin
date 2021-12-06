import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatSelectModule} from '@angular/material/select';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {EditFieldComponent} from './edit.field.component';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule
	],
	declarations: [
		EditFieldComponent,
	],
	providers: [
	],
	exports: [
		EditFieldComponent,

	]
})
export class EditFieldModule {}
