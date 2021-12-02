import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class ReviewsService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/reviews');
		this.addEntry('add', 'POST', '/admin/api/reviews/add');
		this.addEntry('edit', 'POST', '/admin/api/reviews/edit');
		this.addEntry('remove', 'POST', '/admin/api/reviews/remove');
		this.addEntry('delete', 'POST', '/admin/api/reviews/delete');
		this.addEntry('gets', 'GET', '/admin/api/reviews');
		this.addEntry('short-gets', 'GET', '/admin/api/reviews-short');
	}
}
