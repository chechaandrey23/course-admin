import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class CommentsService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/comments');
		this.addEntry('add', 'POST', '/admin/api/comments/add');
		this.addEntry('edit', 'POST', '/admin/api/comments/edit');
		this.addEntry('remove', 'POST', '/admin/api/comments/remove');
		this.addEntry('restore', 'POST', '/admin/api/comments/restore');
		this.addEntry('delete', 'POST', '/admin/api/comments/delete');
	}
}
