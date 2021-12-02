import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class LikesService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/likes');
		this.addEntry('add', 'POST', '/admin/api/likes/add');
		this.addEntry('edit', 'POST', '/admin/api/likes/edit');
		this.addEntry('remove', 'POST', '/admin/api/likes/remove');
		this.addEntry('delete', 'POST', '/admin/api/likes/delete');
	}
}
