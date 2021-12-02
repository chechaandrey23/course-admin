import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class UserInfosService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/user-infos');
		this.addEntry('add', 'POST', '/admin/api/user-info/add');
		this.addEntry('edit', 'POST', '/admin/api/user-info/edit');
		this.addEntry('remove', 'POST', '/admin/api/user-info/remove');
		this.addEntry('delete', 'POST', '/admin/api/user-info/delete');
	}
}
