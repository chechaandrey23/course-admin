import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommentsComponent} from './comments.component';
import {CommentsService} from './comments.service';

import {BaseTableModule} from '../base-table/base.table.module';

import {BaseFieldEditModule} from '../base-field-edit/base.field.edit.module';

@NgModule({
	imports: [
		BaseTableModule,
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
