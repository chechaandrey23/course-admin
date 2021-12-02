import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {FetchService} from '../fetch-service/fetch.service';

@Injectable()
export class ThemesService extends FetchService {
	constructor(http: HttpClient) {
		super(http);
		
		this.addEntry('gets', 'GET', '/admin/api/themes');
		this.addEntry('add', 'POST', '/admin/api/themes/add');
		this.addEntry('edit', 'POST', '/admin/api/themes/edit');
		this.addEntry('remove', 'POST', '/admin/api/themes/remove');
		this.addEntry('delete', 'POST', '/admin/api/themes/delete');
		this.addEntry('short-gets', 'GET', '/admin/api/themes-short');
	}
}
