import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class ImagesService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/images');
		this.addEntry('add', 'POST', '/admin/api/images/add');
		this.addEntry('edit', 'POST', '/admin/api/images/edit');
		this.addEntry('remove', 'POST', '/admin/api/images/remove');
		this.addEntry('delete', 'POST', '/admin/api/images/delete');
	}
}
