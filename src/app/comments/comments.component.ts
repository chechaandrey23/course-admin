import {Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

import {displayUser} from '../helpers/helper.display.user';

import {CommentsService} from './comments.service';
import {UsersService} from '../users/users.service';
import {ReviewsService} from '../reviews/reviews.service';

@Component({
	selector: 'comments',
	templateUrl: './comments.component.html',
	styleUrls: []
})
export class CommentsComponent implements AfterViewInit {
	constructor(
		private commentsService:CommentsService,
		private usersService: UsersService,
		private reviewsService: ReviewsService,
	) {}


	@ViewChild('viewTable')
	public viewTable: any;

	@ViewChild('modalButton')
	public modalButton: any;

	public fields: any = [
		{name: "id", title: "id"},
		{name: "user", title: "user", viewFn: (entry: any) => displayUser(entry || {})},
		{name: "review", title: "review(title)", viewFn: (review: any) => (review?.id+' => '+review?.groupTitle?.group?.group+'/'+review?.groupTitle?.title?.title)},
		{name: "comment", title: "user comment"},
		{name: "draft", title: "draft"},
		{name: "blocked", title: "ban"}
	];

	public editFields: any = [
		{name: 'id', title: 'id', type: 'hidden', formControlName: 'id', required: true},
		{name: "user", title: "user", type: 'select', formControlName: 'userId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.usersService.fetch('short-user-gets', {}).then((data: any) => {
					res(data.map((entry: any) => { return {value: entry.id, title: displayUser(entry)}}));
				});
			})
		}},
		{name: "review", title: "review(title)", type: 'select', formControlName: 'reviewId', editFn: (data: any) => {
			return data.id;
		}, editReceiveFn: () => {
			return new Promise((res, rej) => {
				this.reviewsService.fetch('short-gets', {}).then((data: any) => {
					res(data.map((entry: any) => {
						return {value: entry.id, title: 'id:'+entry?.id+'=>'+entry?.groupTitle?.group?.group+'/'+entry?.groupTitle?.title?.title}
					}));
				});
			})
		}},
		{name: "comment", title: 'user comment', type: 'textarea', formControlName: 'comment'},
		{name: "draft", title: 'is draft', type: 'checkbox', formControlName: 'draft'},
		{name: "blocked", title: 'is ban', type: 'checkbox', formControlName: 'blocked'}
	];

	public fetch: any = async (o: any) => {
		await this.commentsService.fetch('gets', o);
	}

	public fetchMore: any = async (o: any) => {
		await this.commentsService.fetch('gets', o);
	}

	public fetchEditSave: any = async(o: any) => {
		await this.commentsService.fetch('edit', o);
	}

	public fetchNewSave: any = async(o: any) => {
		await this.commentsService.fetch('add', o);
	}

	public fetchRemove: any = async(o: any) => {
		await this.commentsService.fetch('remove', o);
	}

	public fetchRestore: any = async(o: any) => {
		await this.commentsService.fetch('restore', o);
	}

	public fetchDelete: any = async(o: any) => {
		await this.commentsService.fetch('delete', o);
	}

	ngAfterViewInit() {
		this.viewTable.refreshSettings();
		this.modalButton.refreshSettings();
	}
}
