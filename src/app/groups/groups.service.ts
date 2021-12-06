import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AbstractRequestService} from '../abstract.request.service';

@Injectable()
export class GroupsService extends AbstractRequestService {
	constructor() {
		super();

		this.addEntry('gets', 'GET', '/admin/api/groups');
		this.addEntry('add', 'POST', '/admin/api/groups/add');
		this.addEntry('edit', 'POST', '/admin/api/groups/edit');
		this.addEntry('remove', 'POST', '/admin/api/groups/remove');
		this.addEntry('restore', 'POST', '/admin/api/groups/restore');
		this.addEntry('delete', 'POST', '/admin/api/groups/delete');
		this.addEntry('short-gets', 'GET', '/admin/api/groups-short');
	}
}
