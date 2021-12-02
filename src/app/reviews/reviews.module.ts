import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ReviewsComponent} from './reviews.component';
import {ReviewsService} from './reviews.service';

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
		ReviewsComponent,
		
	],
	providers: [
		ReviewsService,
	],
	exports: [
		ReviewsComponent,
		
	]
})
export class ReviewsModule {}
