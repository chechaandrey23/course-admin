import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalModule, BsModalService} from 'ngx-bootstrap/modal';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ButtonsModule} from 'ngx-bootstrap/buttons';

import {ButtonModalComponent} from './button.modal.component';

import {EditFieldModule} from '../edit-field/edit.field.module';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		NgbModule,
		ModalModule,
		AlertModule,
		ButtonsModule,
		EditFieldModule
	],
	declarations: [
		ButtonModalComponent,

	],
	providers: [
		BsModalService
	],
	exports: [
		ButtonModalComponent,

	]
})
export class ButtonModalModule {}
