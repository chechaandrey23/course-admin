import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommentsComponent} from './comments.component';
import {CommentsService} from './comments.service';

import {ViewTableModule} from '../view-table/view.table.module';
import {ButtonModalModule} from '../button-modal/button.modal.module';

@NgModule({
	imports: [
		ViewTableModule,
		ButtonModalModule
	],
	declarations: [
		CommentsComponent,

	],
	providers: [
		CommentsService,
	],
	exports: [
		CommentsComponent,

	]
})
export class CommentsModule {}
