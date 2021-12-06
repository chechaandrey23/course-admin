import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ImagesComponent} from './images.component';
import {ImagesService} from './images.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
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
