import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {displayUser} from '../helpers/helper.display.user';

import {RefreshTokensService} from './refresh.tokens.service';

@Component({
	selector: 'refresh-tokens',
	templateUrl: './refresh.tokens.component.html',
	styleUrls: []
})
export class RefreshTokensComponent implements AfterViewInit {
	constructor(private readonly refreshTokensService: RefreshTokensService) {}


	@ViewChild('viewTable')
	public viewTable: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "user", title: "user", viewFn: (entry: any) => displayUser(entry || {})},
		{name: "dateEndRT1", title: 'end time refresh token', viewFn: (entry: any) => (new Date(entry)).toString()}
	];

	public fetch: any = async (o: any) => {
		await this.refreshTokensService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.refreshTokensService.fetch('gets', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.refreshTokensService.fetch('delete', o);
	}

	public fetchErase: any = async(o: any) => {
		await this.refreshTokensService.fetch('erase', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
	}
}
