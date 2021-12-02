import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class RatingsService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/ratings');
		this.addEntry('add', 'POST', '/admin/api/ratings/add');
		this.addEntry('edit', 'POST', '/admin/api/ratings/edit');
		this.addEntry('remove', 'POST', '/admin/api/ratings/remove');
		this.addEntry('delete', 'POST', '/admin/api/ratings/delete');
	}
}
