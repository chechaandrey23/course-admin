import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ReviewsComponent} from './reviews.component';
import {ReviewsService} from './reviews.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,

		ViewTableModule,
		ButtonModalModule
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
