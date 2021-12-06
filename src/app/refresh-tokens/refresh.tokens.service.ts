import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class RefreshTokensService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/refresh-tokens');
		this.addEntry('delete', 'POST', '/admin/api/refresh-tokens/delete');
	}
}
