import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class UsersService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/users');
		this.addEntry('add-social', 'POST', '/admin/api/users/add-social');
		this.addEntry('add', 'POST', '/admin/api/users/add');
		this.addEntry('edit', 'POST', '/admin/api/users/edit');
		this.addEntry('remove', 'POST', '/admin/api/users/remove');
		this.addEntry('delete', 'POST', '/admin/api/users/delete');
		this.addEntry('short-gets', 'GET', '/admin/api/users-short');
		this.addEntry('short-editor-gets', 'GET', '/admin/api/users-editor-short');
		this.addEntry('short-user-gets', 'GET', '/admin/api/users-user-short');
	}
}
