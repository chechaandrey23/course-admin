import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {displayUser} from '../helpers/helper.display.user';

import {ReviewsService} from './reviews.service';
import {UsersService} from '../users/users.service';
import {GroupsService} from '../groups/groups.service';
import {TitlesService} from '../titles/titles.service';
import {TagsService} from '../tags/tags.service';

@Component({
	selector: 'reviews',
	templateUrl: './reviews.component.html',
	styleUrls: []
})
export class ReviewsComponent implements AfterViewInit {
	constructor(
		private readonly reviewsService:ReviewsService,
		private readonly usersService:UsersService,
		private readonly groupsService:GroupsService,
		private readonly titlesService:TitlesService,
		private readonly tagsService:TagsService
	) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "groupTitle", title:"group/title", viewFn: (data: any) => (data.group.group+'/'+data.title.title)},
		{name: "description", title: "description", viewFn: (data: any) => {return data.substring(0, 100)}},
		{name: "authorRating", title: "AR"},
		{name: "averageEditorRating", title: "AER"},
		{name: "averageUserRating", title: "AUR"},
		{name: "user", title: "user", viewFn: (entry: any) => displayUser(entry || {})},
		{name: "draft", title: "draft"},
		{name: "blocked", title: "ban"},
		{name: "tags", title: "tags", viewFn: (data: any) => ((data || []).map((item: any) => item.tag).join(', '))}
	];

	public editFields: any = [
		{name: "id", title: "id", type: 'hidden', formControlName: 'id', required: true},
		{name: "description", title: 'Description', type: 'textarea', formControlName: 'description'},
		{name: "text", title: 'Full Text', type: 'textarea', formControlName: 'text'},
		{name: "authorRating", title: 'Author Rating', type: 'select', formControlName: 'authorRating', editReceiveFn: () => {
			return new Promise((res, rej) => {
				res([1,2,3,4,5,6,7,8,9,10].map((item) => {return {value: item, title: item}}))
			})
		}},
		{name: "user", title: 'author content', type: 'select', formControlName: 'userId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.usersService.fetch('short-editor-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: displayUser(entry)}}));
				});
			})
		}},
		{name: "groupTitle", title: 'group', type: 'select', formControlName: 'groupId', editFn: (data: any) => {
			return data.group.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.groupsService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: entry.group}}));
				});
			})
		}},
		{name: "groupTitle", title: 'title', type: 'select', formControlName: 'titleId', editFn: (data: any) => {
			return data.title.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.titlesService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: entry.title}}));
				});
			})
		}},
		{name: "draft", title: 'is draft', type: 'checkbox', formControlName: 'draft'},
		{name: "blocked", title: 'is banned', type: 'checkbox', formControlName: 'blocked'},
		{name: "tags", title: 'tags', type: 'select-multiple', formControlName: 'tags', editFn: (data: any) => {
			return data.map((item: any) => item.id);
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.tagsService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: entry.tag}}));
				});
			})
		}}
	];

	public fetch: any = async (o: any) => {
		await this.reviewsService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.reviewsService.fetch('gets', o);
	}

	public fetchEdit: any = async(o: any) => {
		await this.reviewsService.fetch('getFull', {...o, params: {...o.params, reviewId: o.params.id}});
	}

	public fetchEditSave: any = async(o: any) => {
		await this.reviewsService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.reviewsService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.reviewsService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.reviewsService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.reviewsService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
