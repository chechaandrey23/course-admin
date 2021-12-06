import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class TitlesService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/titles');
		this.addEntry('add', 'POST', '/admin/api/titles/add');
		this.addEntry('edit', 'POST', '/admin/api/titles/edit');
		this.addEntry('remove', 'POST', '/admin/api/titles/remove');
		this.addEntry('restore', 'POST', '/admin/api/titles/restore');
		this.addEntry('delete', 'POST', '/admin/api/titles/delete');
		this.addEntry('short-gets', 'GET', '/admin/api/titles-short');
	}
}
