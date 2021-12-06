import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GroupsComponent} from './groups/groups.component';
import {TitlesComponent} from './titles/titles.component';
import {TitleGroupsComponent} from './title-groups/title.groups.component';
import {RolesComponent} from './roles/roles.component';
import {ThemesComponent} from './themes/themes.component';
import {LangsComponent} from './langs/langs.component';
import {UserRolesComponent} from './user-roles/user.roles.component';
import {UsersComponent} from './users/users.component';
import {UserInfosComponent} from './user-infos/user-infos.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {TagsComponent} from './tags/tags.component';
import {ReviewTagsComponent} from './review-tags/review.tags.component';
import {RatingsComponent} from './ratings/ratings.component';
import {LikesComponent} from './likes/likes.component';
import {CommentsComponent} from './comments/comments.component';
import {ImagesComponent} from './images/images.component';

import {RefreshTokensComponent} from './refresh-tokens/refresh.tokens.component';

const routes: Routes = [
	{path: 'titles', component: TitlesComponent},
	{path: 'title-groups', component: TitleGroupsComponent},
	{path: 'groups', component: GroupsComponent},
	{path: 'roles', component: RolesComponent},
	{path: 'themes', component: ThemesComponent},
	{path: 'langs', component: LangsComponent},
	{path: 'user-roles', component: UserRolesComponent},
	{path: 'users', component: UsersComponent},
	{path: 'user-infos', component: UserInfosComponent},
	{path: 'reviews', component: ReviewsComponent},
	{path: 'tags', component: TagsComponent},
	{path: 'review-tags', component: ReviewTagsComponent},
	{path: 'ratings', component: RatingsComponent},
	{path: 'likes', component: LikesComponent},
	{path: 'comments', component: CommentsComponent},
	{path: 'images', component: ImagesComponent},
	{path: 'refresh-tokens', component: RefreshTokensComponent},
	{path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
