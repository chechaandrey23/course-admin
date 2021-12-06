import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class ReviewsService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/reviews');
		this.addEntry('add', 'POST', '/admin/api/reviews/add');
		this.addEntry('edit', 'POST', '/admin/api/reviews/edit');
		this.addEntry('remove', 'POST', '/admin/api/reviews/remove');
		this.addEntry('restore', 'POST', '/admin/api/reviews/restore');
		this.addEntry('delete', 'POST', '/admin/api/reviews/delete');
		this.addEntry('getFull', 'GET', '/admin/api/review-full');
		this.addEntry('short-gets', 'GET', '/admin/api/reviews-short');
	}
}
