import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

//import {MatTableModule} from '@angular/material/table';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

//import {GroupsComponent} from './groups/groups.component';
//import {TitlesComponent} from './titles/titles.component';
//import {RolesComponent} from './roles/roles.component';
//import {ThemesComponent} from './themes/themes.component';

import {GroupsModule} from './groups/groups.module';
import {TitlesModule} from './titles/titles.module';
import {TitleGroupsModule} from './title-groups/title.groups.module';
import {LangsModule} from './langs/langs.module';
import {ThemesModule} from './themes/themes.module';
import {RolesModule} from './roles/roles.module';
import {UserRolesModule} from './user-roles/user.roles.module';
import {UsersModule} from './users/users.module';
import {UserInfosModule} from './user-infos/user-infos.module';
import {ReviewsModule} from './reviews/reviews.module';
import {TagsModule} from './tags/tags.module';
import {ReviewTagsModule} from './review-tags/review.tags.module';
import {RatingsModule} from './ratings/ratings.module';
import {LikesModule} from './likes/likes.module';
import {CommentsModule} from './comments/comments.module';
import {ImagesModule} from './images/images.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RefreshTokensModule} from './refresh-tokens/refresh.tokens.module';

//import {BaseFieldEditComponent} from './groups/base.field.edit.component';

@NgModule({
	declarations: [
		AppComponent,

		//GroupsComponent,
		//TitlesComponent,
		//RolesComponent,

		//BaseFieldEditComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,

		RefreshTokensModule,

		GroupsModule,
		TitlesModule,
		TitleGroupsModule,
		LangsModule,
		ThemesModule,
		RolesModule,
		UserRolesModule,
		UsersModule,
		UserInfosModule,
		ReviewsModule,
		TagsModule,
		ReviewTagsModule,
		RatingsModule,
		LikesModule,
		CommentsModule,
		ImagesModule,

		//NgbModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,

		TooltipModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
