import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalModule, BsModalService} from 'ngx-bootstrap/modal';
import {AlertModule} from 'ngx-bootstrap/alert';

import {ViewSearchTableComponent} from './view.search.table.component';

//import {EditFieldModule} from '../edit-field/edit.field.module';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		NgbModule,
		ModalModule,
		AlertModule,
		//EditFieldModule
	],
	declarations: [
		ViewSearchTableComponent,

	],
	providers: [
		BsModalService
	],
	exports: [
		ViewSearchTableComponent,

	]
})
export class ViewSearchTableModule {}
