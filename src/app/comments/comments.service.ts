import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class CommentsService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/comments');
		this.addEntry('add', 'POST', '/admin/api/comments/add');
		this.addEntry('edit', 'POST', '/admin/api/comments/edit');
		this.addEntry('remove', 'POST', '/admin/api/comments/remove');
		this.addEntry('delete', 'POST', '/admin/api/comments/delete');
	}
}
