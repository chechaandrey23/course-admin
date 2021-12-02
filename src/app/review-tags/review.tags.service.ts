import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class ReviewTagsService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/review-tags');
	}
}
