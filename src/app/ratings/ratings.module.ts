import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RatingsComponent} from './ratings.component';
import {RatingsService} from './ratings.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
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
