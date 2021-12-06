import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class ReviewTagsService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/review-tags');
	}
}
