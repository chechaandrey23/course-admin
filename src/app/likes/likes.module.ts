import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LikesComponent} from './likes.component';
import {LikesService} from './likes.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
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
