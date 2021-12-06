import {Injectable} from '@angular/core';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class LangsService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/langs');
		this.addEntry('add', 'POST', '/admin/api/langs/add');
		this.addEntry('edit', 'POST', '/admin/api/langs/edit');
		this.addEntry('remove', 'POST', '/admin/api/langs/remove');
		this.addEntry('restore', 'POST', '/admin/api/langs/restore');
		this.addEntry('delete', 'POST', '/admin/api/langs/delete');
		this.addEntry('short-gets', 'GET', '/admin/api/langs-short');
	}
}
