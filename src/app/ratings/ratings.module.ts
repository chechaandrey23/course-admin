import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RatingsComponent} from './ratings.component';
import {RatingsService} from './ratings.service';

import {BaseTableModule} from '../base-table/base.table.module';

import {BaseFieldEditModule} from '../base-field-edit/base.field.edit.module';

@NgModule({
	imports: [
		BaseTableModule,
	],
	declarations: [
		RatingsComponent,
		
	],
	providers: [
		RatingsService,
	],
	exports: [
		RatingsComponent,
		
	]
})
export class RatingsModule {}
