import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class RolesService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/roles');
		this.addEntry('short-gets', 'GET', '/admin/api/roles-short');
		this.addEntry('add', 'POST', '/admin/api/roles/add');
		this.addEntry('edit', 'POST', '/admin/api/roles/edit');
		this.addEntry('remove', 'POST', '/admin/api/roles/remove');
		this.addEntry('delete', 'POST', '/admin/api/roles/delete');
	}
}
