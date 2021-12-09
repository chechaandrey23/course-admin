import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class SearchReviewsService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/elastic-search-reviews');
		this.addEntry('full-get', 'GET', '/admin/api/elastic-search-review/full');
		this.addEntry('indexing', 'POST', '/admin/api/elastic-search-review/indexing');
		this.addEntry('delete-index', 'POST', '/admin/api/elastic-search-review/delete-index')
	}
}
