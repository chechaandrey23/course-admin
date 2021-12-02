import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ImagesComponent} from './images.component';
import {ImagesService} from './images.service';

import {BaseTableModule} from '../base-table/base.table.module';

import {BaseFieldEditModule} from '../base-field-edit/base.field.edit.module';

@NgModule({
	imports: [
		BaseTableModule,
	],
	declarations: [
		ImagesComponent,
		
	],
	providers: [
		ImagesService,
	],
	exports: [
		ImagesComponent,
		
	]
})
export class ImagesModule {}
