import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class ImagesService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/images');
		this.addEntry('add', 'POST', '/admin/api/images/add');
		this.addEntry('edit', 'POST', '/admin/api/images/edit');
		this.addEntry('remove', 'POST', '/admin/api/images/remove');
		this.addEntry('restore', 'POST', '/admin/api/images/restore');
		this.addEntry('delete', 'POST', '/admin/api/images/delete');
	}
}
