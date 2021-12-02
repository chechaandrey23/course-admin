import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LikesComponent} from './likes.component';
import {LikesService} from './likes.service';

import {BaseTableModule} from '../base-table/base.table.module';

import {BaseFieldEditModule} from '../base-field-edit/base.field.edit.module';

@NgModule({
	imports: [
		BaseTableModule,
	],
	declarations: [
		LikesComponent,
		
	],
	providers: [
		LikesService,
	],
	exports: [
		LikesComponent,
		
	]
})
export class LikesModule {}
