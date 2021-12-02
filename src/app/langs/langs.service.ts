import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class LangsService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/langs');
		this.addEntry('add', 'POST', '/admin/api/langs/add');
		this.addEntry('edit', 'POST', '/admin/api/langs/edit');
		this.addEntry('remove', 'POST', '/admin/api/langs/remove');
		this.addEntry('delete', 'POST', '/admin/api/langs/delete');
		this.addEntry('short-gets', 'GET', '/admin/api/langs-short');
	}
}
