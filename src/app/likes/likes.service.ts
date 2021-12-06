import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class LikesService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/likes');
		this.addEntry('add', 'POST', '/admin/api/likes/add');
		this.addEntry('edit', 'POST', '/admin/api/likes/edit');
		this.addEntry('remove', 'POST', '/admin/api/likes/remove');
		this.addEntry('restore', 'POST', '/admin/api/likes/restore');
		this.addEntry('delete', 'POST', '/admin/api/likes/delete');
	}
}
