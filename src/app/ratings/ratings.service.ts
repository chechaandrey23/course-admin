import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class RatingsService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/ratings');
		this.addEntry('add', 'POST', '/admin/api/ratings/add');
		this.addEntry('edit', 'POST', '/admin/api/ratings/edit');
		this.addEntry('remove', 'POST', '/admin/api/ratings/remove');
		this.addEntry('restore', 'POST', '/admin/api/ratings/restore');
		this.addEntry('delete', 'POST', '/admin/api/ratings/delete');
	}
}
