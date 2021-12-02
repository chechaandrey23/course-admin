import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class TagsService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/tags');
		this.addEntry('add', 'POST', '/admin/api/tags/add');
		this.addEntry('edit', 'POST', '/admin/api/tags/edit');
		this.addEntry('remove', 'POST', '/admin/api/tags/remove');
		this.addEntry('delete', 'POST', '/admin/api/tags/delete');
		this.addEntry('short-gets', 'GET', '/admin/api/tags-short');
	}
}
