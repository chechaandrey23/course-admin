"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["main"],{

/***/ 8438:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 5681);
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups/groups.component */ 2978);
/* harmony import */ var _titles_titles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titles/titles.component */ 1411);
/* harmony import */ var _title_groups_title_groups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title-groups/title.groups.component */ 9440);
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles/roles.component */ 5218);
/* harmony import */ var _themes_themes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themes/themes.component */ 6822);
/* harmony import */ var _langs_langs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./langs/langs.component */ 7602);
/* harmony import */ var _user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-roles/user.roles.component */ 2996);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ 718);
/* harmony import */ var _user_infos_user_infos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-infos/user-infos.component */ 7407);
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviews/reviews.component */ 5534);
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tags/tags.component */ 4941);
/* harmony import */ var _review_tags_review_tags_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./review-tags/review.tags.component */ 5778);
/* harmony import */ var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ratings/ratings.component */ 4531);
/* harmony import */ var _likes_likes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./likes/likes.component */ 2531);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comments/comments.component */ 3769);
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/images.component */ 5441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 4001);



















const routes = [
    { path: 'titles', component: _titles_titles_component__WEBPACK_IMPORTED_MODULE_1__.TitlesComponent },
    { path: 'title-groups', component: _title_groups_title_groups_component__WEBPACK_IMPORTED_MODULE_2__.TitleGroupsComponent },
    { path: 'groups', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent },
    { path: 'roles', component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__.RolesComponent },
    { path: 'themes', component: _themes_themes_component__WEBPACK_IMPORTED_MODULE_4__.ThemesComponent },
    { path: 'langs', component: _langs_langs_component__WEBPACK_IMPORTED_MODULE_5__.LangsComponent },
    { path: 'user-roles', component: _user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_6__.UserRolesComponent },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_7__.UsersComponent },
    { path: 'user-infos', component: _user_infos_user_infos_component__WEBPACK_IMPORTED_MODULE_8__.UserInfosComponent },
    { path: 'reviews', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__.ReviewsComponent },
    { path: 'tags', component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_10__.TagsComponent },
    { path: 'review-tags', component: _review_tags_review_tags_component__WEBPACK_IMPORTED_MODULE_11__.ReviewTagsComponent },
    { path: 'ratings', component: _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_12__.RatingsComponent },
    { path: 'likes', component: _likes_likes_component__WEBPACK_IMPORTED_MODULE_13__.LikesComponent },
    { path: 'comments', component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_14__.CommentsComponent },
    { path: 'images', component: _images_images_component__WEBPACK_IMPORTED_MODULE_15__.ImagesComponent },
    { path: '', redirectTo: '/titles', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule] }); })();


/***/ }),

/***/ 6104:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 8018);


class AppComponent {
    constructor() {
        this.title = 'admin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent], encapsulation: 2 });


/***/ }),

/***/ 2014:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 8438);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6104);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 8018);
/* harmony import */ var _groups_groups_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups/groups.module */ 1513);
/* harmony import */ var _titles_titles_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./titles/titles.module */ 2491);
/* harmony import */ var _title_groups_title_groups_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title-groups/title.groups.module */ 2467);
/* harmony import */ var _langs_langs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./langs/langs.module */ 6923);
/* harmony import */ var _themes_themes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes/themes.module */ 8747);
/* harmony import */ var _roles_roles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roles/roles.module */ 7114);
/* harmony import */ var _user_roles_user_roles_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-roles/user.roles.module */ 6161);
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.module */ 6477);
/* harmony import */ var _user_infos_user_infos_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-infos/user-infos.module */ 560);
/* harmony import */ var _reviews_reviews_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reviews/reviews.module */ 9441);
/* harmony import */ var _tags_tags_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tags/tags.module */ 4110);
/* harmony import */ var _review_tags_review_tags_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./review-tags/review.tags.module */ 61);
/* harmony import */ var _ratings_ratings_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ratings/ratings.module */ 8219);
/* harmony import */ var _likes_likes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./likes/likes.module */ 6603);
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comments/comments.module */ 1530);
/* harmony import */ var _images_images_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/images.module */ 8801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 4001);




//import {MatTableModule} from '@angular/material/table';



//import {GroupsComponent} from './groups/groups.component';
//import {TitlesComponent} from './titles/titles.component';
//import {RolesComponent} from './roles/roles.component';
//import {ThemesComponent} from './themes/themes.component';

















//import {BaseFieldEditComponent} from './groups/base.field.edit.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            _groups_groups_module__WEBPACK_IMPORTED_MODULE_3__.GroupsModule,
            _titles_titles_module__WEBPACK_IMPORTED_MODULE_4__.TitlesModule,
            _title_groups_title_groups_module__WEBPACK_IMPORTED_MODULE_5__.TitleGroupsModule,
            _langs_langs_module__WEBPACK_IMPORTED_MODULE_6__.LangsModule,
            _themes_themes_module__WEBPACK_IMPORTED_MODULE_7__.ThemesModule,
            _roles_roles_module__WEBPACK_IMPORTED_MODULE_8__.RolesModule,
            _user_roles_user_roles_module__WEBPACK_IMPORTED_MODULE_9__.UserRolesModule,
            _users_users_module__WEBPACK_IMPORTED_MODULE_10__.UsersModule,
            _user_infos_user_infos_module__WEBPACK_IMPORTED_MODULE_11__.UserInfosModule,
            _reviews_reviews_module__WEBPACK_IMPORTED_MODULE_12__.ReviewsModule,
            _tags_tags_module__WEBPACK_IMPORTED_MODULE_13__.TagsModule,
            _review_tags_review_tags_module__WEBPACK_IMPORTED_MODULE_14__.ReviewTagsModule,
            _ratings_ratings_module__WEBPACK_IMPORTED_MODULE_15__.RatingsModule,
            _likes_likes_module__WEBPACK_IMPORTED_MODULE_16__.LikesModule,
            _comments_comments_module__WEBPACK_IMPORTED_MODULE_17__.CommentsModule,
            _images_images_module__WEBPACK_IMPORTED_MODULE_18__.ImagesModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _groups_groups_module__WEBPACK_IMPORTED_MODULE_3__.GroupsModule,
        _titles_titles_module__WEBPACK_IMPORTED_MODULE_4__.TitlesModule,
        _title_groups_title_groups_module__WEBPACK_IMPORTED_MODULE_5__.TitleGroupsModule,
        _langs_langs_module__WEBPACK_IMPORTED_MODULE_6__.LangsModule,
        _themes_themes_module__WEBPACK_IMPORTED_MODULE_7__.ThemesModule,
        _roles_roles_module__WEBPACK_IMPORTED_MODULE_8__.RolesModule,
        _user_roles_user_roles_module__WEBPACK_IMPORTED_MODULE_9__.UserRolesModule,
        _users_users_module__WEBPACK_IMPORTED_MODULE_10__.UsersModule,
        _user_infos_user_infos_module__WEBPACK_IMPORTED_MODULE_11__.UserInfosModule,
        _reviews_reviews_module__WEBPACK_IMPORTED_MODULE_12__.ReviewsModule,
        _tags_tags_module__WEBPACK_IMPORTED_MODULE_13__.TagsModule,
        _review_tags_review_tags_module__WEBPACK_IMPORTED_MODULE_14__.ReviewTagsModule,
        _ratings_ratings_module__WEBPACK_IMPORTED_MODULE_15__.RatingsModule,
        _likes_likes_module__WEBPACK_IMPORTED_MODULE_16__.LikesModule,
        _comments_comments_module__WEBPACK_IMPORTED_MODULE_17__.CommentsModule,
        _images_images_module__WEBPACK_IMPORTED_MODULE_18__.ImagesModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 5029:
/*!**************************************************************!*\
  !*** ./src/app/base-field-edit/base.field.edit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseFieldEditComponent": () => (/* binding */ BaseFieldEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);




function BaseFieldEditComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function BaseFieldEditComponent_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.control);
} }
function BaseFieldEditComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control);
} }
function BaseFieldEditComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.control);
} }
function BaseFieldEditComponent_div_1_span_4_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", entry_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r9.title);
} }
function BaseFieldEditComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseFieldEditComponent_div_1_span_4_option_2_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.data);
} }
function BaseFieldEditComponent_div_1_span_5_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", entry_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r11.title);
} }
function BaseFieldEditComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseFieldEditComponent_div_1_span_5_option_2_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r6.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.data);
} }
function BaseFieldEditComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BaseFieldEditComponent_div_1_span_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.control);
} }
function BaseFieldEditComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseFieldEditComponent_div_1_span_1_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseFieldEditComponent_div_1_span_2_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BaseFieldEditComponent_div_1_span_3_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BaseFieldEditComponent_div_1_span_4_Template, 3, 2, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BaseFieldEditComponent_div_1_span_5_Template, 3, 2, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BaseFieldEditComponent_div_1_span_6_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "multi-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "file-upload");
} }
class BaseFieldEditComponent {
    constructor() {
        this.fn = undefined;
        this.type = 'input';
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.inProcess = false;
        this.isArray = false;
    }
    ngOnInit() {
        if (this.fn) {
            this.inProcess = true;
            this.fn().then((data) => {
                this.inProcess = false;
                this.isArray = Array.isArray(data);
                this.data = data;
            }).catch((e) => { console.log(e); });
        }
    }
    onFileChange(e) {
        if (e.target.files.length > 0) {
            const files = e.target.files;
            let fileSource = Array.prototype.reduce.call(files, (acc, value) => { acc.push(value); return acc; }, []);
            try {
                this.control.patchValue(fileSource);
            }
            catch (e) { }
        }
    }
    ngOnDestroy() { }
}
BaseFieldEditComponent.ɵfac = function BaseFieldEditComponent_Factory(t) { return new (t || BaseFieldEditComponent)(); };
BaseFieldEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseFieldEditComponent, selectors: [["base-field-edit"]], inputs: { fn: "fn", type: "type", control: "control" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "row", "justify-content-center"], ["role", "status", 1, "col-auto", "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"], ["type", "text", 1, "form-control", 3, "formControl"], [1, "form-control", 3, "formControl"], ["type", "checkbox", 1, "form-control", 3, "formControl"], ["multiple", "", 1, "form-control", 3, "formControl"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "file", "multiple", "", "accept", "image/*", 1, "form-control", 3, "formControl", "change"]], template: function BaseFieldEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BaseFieldEditComponent_ng_container_0_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseFieldEditComponent_div_1_Template, 7, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inProcess);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectMultipleControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor], encapsulation: 2 });


/***/ }),

/***/ 4312:
/*!***********************************************************!*\
  !*** ./src/app/base-field-edit/base.field.edit.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseFieldEditModule": () => (/* binding */ BaseFieldEditModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _base_field_edit_base_field_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-field-edit/base.field.edit.component */ 5029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


//import {MatSelectModule} from '@angular/material/select';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


class BaseFieldEditModule {
}
BaseFieldEditModule.ɵfac = function BaseFieldEditModule_Factory(t) { return new (t || BaseFieldEditModule)(); };
BaseFieldEditModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BaseFieldEditModule });
BaseFieldEditModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BaseFieldEditModule, { declarations: [_base_field_edit_base_field_edit_component__WEBPACK_IMPORTED_MODULE_0__.BaseFieldEditComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule], exports: [_base_field_edit_base_field_edit_component__WEBPACK_IMPORTED_MODULE_0__.BaseFieldEditComponent] }); })();


/***/ }),

/***/ 302:
/*!****************************************************!*\
  !*** ./src/app/base-table/base.table.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTableComponent": () => (/* binding */ BaseTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _base_field_edit_base_field_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-field-edit/base.field.edit.component */ 5029);






function BaseTableComponent_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
} }
function BaseTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_div_2_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return ctx_r9.onCreate($event, _r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BaseTableComponent_div_2_span_3_Template, 1, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.addProcess);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addProcess);
} }
function BaseTableComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", field_r11.width + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](field_r11.title);
} }
function BaseTableComponent_ng_container_13_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r20 = ctx.$implicit;
    const entry_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", field_r20.width + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](field_r20.viewFn ? field_r20.viewFn(entry_r12[field_r20.name]) : entry_r12[field_r20.name]);
} }
function BaseTableComponent_ng_container_13_div_1_ng_container_7_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_container_13_div_1_ng_container_7_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); const entry_r12 = ctx_r25.$implicit; const i_r13 = ctx_r25.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return ctx_r23.onEdit($event, _r4, entry_r12, i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BaseTableComponent_ng_container_13_div_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BaseTableComponent_ng_container_13_div_1_ng_container_7_a_1_Template, 2, 0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !entry_r12.deletedAt);
} }
function BaseTableComponent_ng_container_13_div_1_ng_container_10_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_container_13_div_1_ng_container_10_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); const entry_r12 = ctx_r29.$implicit; const i_r13 = ctx_r29.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.onRemove($event, entry_r12, i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BaseTableComponent_ng_container_13_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BaseTableComponent_ng_container_13_div_1_ng_container_10_a_1_Template, 2, 0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !entry_r12.deletedAt);
} }
function BaseTableComponent_ng_container_13_div_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_container_13_div_1_ng_container_13_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const entry_r12 = ctx_r34.$implicit; const i_r13 = ctx_r34.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return ctx_r32.onDelete($event, _r6, entry_r12, i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function BaseTableComponent_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BaseTableComponent_ng_container_13_div_1_ng_container_1_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BaseTableComponent_ng_container_13_div_1_ng_container_7_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BaseTableComponent_ng_container_13_div_1_ng_container_10_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BaseTableComponent_ng_container_13_div_1_ng_container_13_Template, 3, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r12.deletedAt ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "8%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isRemove);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "7%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isDelete);
} }
function BaseTableComponent_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BaseTableComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BaseTableComponent_ng_container_13_div_1_Template, 14, 13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BaseTableComponent_ng_container_13_div_2_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.inProcess.includes(entry_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.inProcess.includes(entry_r12.id));
} }
function BaseTableComponent_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 16);
} }
function BaseTableComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_div_15_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.onMore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BaseTableComponent_div_15_span_2_Template, 1, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"]("width:100%; display: block;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.moreProcess);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.moreProcess);
} }
function BaseTableComponent_ng_template_16_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r40.addError);
} }
function BaseTableComponent_ng_template_16_ng_container_10_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "base-field-edit", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](field_r44.editTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "70%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", field_r44.editType)("fn", field_r44.editReceiveFn)("control", ctx_r46.modalForm.get(field_r44.formControlName));
} }
function BaseTableComponent_ng_template_16_ng_container_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BaseTableComponent_ng_template_16_ng_container_10_ng_container_3_div_1_Template, 6, 8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r43.isEntryLong(field_r44));
} }
function BaseTableComponent_ng_template_16_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BaseTableComponent_ng_template_16_ng_container_10_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r41.modalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.fields);
} }
function BaseTableComponent_ng_template_16_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function BaseTableComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_template_16_Template_a_click_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const modal_r39 = restoredCtx.$implicit; $event.preventDefault(); return modal_r39.dismiss("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BaseTableComponent_ng_template_16_ng_container_9_Template, 4, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BaseTableComponent_ng_template_16_ng_container_10_Template, 4, 2, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BaseTableComponent_ng_template_16_ng_container_11_Template, 5, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_template_16_Template_a_click_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const modal_r39 = restoredCtx.$implicit; $event.preventDefault(); return modal_r39.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_template_16_Template_a_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.onModalEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.modalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.addError);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.addProcess);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.addProcess);
} }
function BaseTableComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Confirm You action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_template_18_Template_a_click_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const modal_r52 = restoredCtx.$implicit; $event.preventDefault(); return modal_r52.dismiss("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_template_18_Template_a_click_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const modal_r52 = restoredCtx.$implicit; $event.preventDefault(); return modal_r52.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseTableComponent_ng_template_18_Template_a_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.onModalConfirm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Do you really want to delete (permanently) the current row with id ", ctx_r7.deletedId, "?");
} }
class BaseTableComponent {
    constructor(modalService) {
        this.modalService = modalService;
        // {name, title, width}
        // {titleEdit, typeEdit(Input, textArea, Select, mSelect), requireEdit, cbEdit}
        this.fields = [];
        this.isMore = false;
        this.isCreate = false;
        this.isEdit = false;
        this.isRemove = true;
        this.isDelete = true;
        this.querys = [];
        this.service = null;
        this.isFormData = false;
        this.data = [];
        this.inProcess = [];
        this.moreProcess = false;
        this.addProcess = false;
        this.addError = '';
        // modal form data
        this.modalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        this.modalTitle = '...';
        this.deletedId = 0;
        this.obss = {};
        this.obsErrors = {};
        this.currentPage = 1;
    }
    isEntryLong(entry) {
        return entry.editType !== undefined;
    }
    refreshSettings() {
        let o = {};
        this.fields.map((field) => {
            if (this.isEntryLong(field)) {
                let opts = [];
                if (field.editRequire)
                    opts.push(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
                if (field.editType === 'multi-select' || field.editType === 'file-upload') {
                    o[field.formControlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl([], opts);
                }
                else if (field.editType === 'checkbox') {
                    o[field.formControlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false, opts);
                }
                else {
                    o[field.formControlName] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', opts);
                }
            }
        });
        this.modalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup(o);
    }
    editFnData(o) {
        let newO = {};
        this.fields.map((field) => {
            if (this.isEntryLong(field)) {
                newO[field.formControlName] = field.editFn ? field.editFn(o[field.name]) : o[field.name];
            }
        });
        return newO;
    }
    setFormValue(o) {
        let fields = this.modalForm.controls;
        Object.keys(o).map((key) => {
            if (fields[key])
                fields[key].setValue(o[key]);
        });
    }
    getFormValue(input = {}) {
        let o = {};
        Object.keys(input).map((key) => {
            o[key] = input[key];
        });
        Object.keys(this.modalForm.controls).map((key) => {
            o[key] = this.modalForm.controls[key].value;
        });
        return o;
    }
    getFormData() {
        const formData = new FormData();
        Object.keys(this.modalForm.controls).map((key) => {
            let data = this.modalForm.controls[key].value;
            if (Array.isArray(data)) {
                for (let item of data) {
                    formData.append(key + '[]', item);
                }
            }
            else {
                formData.append(key, data);
            }
        });
        return formData;
    }
    emptyObject(o) {
        Object.keys(o).map((key) => {
            o[key] = '';
        });
        return o;
    }
    ngOnInit() {
        this.querys.map((entry) => {
            this.obss[entry.namespace + entry.method] = this.service.source(entry.namespace, entry.method).subscribe((data) => {
                entry.success.call(entry.ctxSuccess || this, data);
            });
            if (entry.error) {
                this.obsErrors[entry.namespace + entry.method] = this.service.error(entry.namespace, entry.method).subscribe((e) => {
                    entry.error.call(entry.ctxError || this, e);
                });
            }
        });
        this.onMore(new Event('click'));
    }
    ngOnDestroy() {
        Object.keys(this.obss).map((key) => {
            this.obss[key].unsubscribe();
            if (this.obsErrors[key])
                this.obsErrors[key].unsubscribe();
        });
    }
    onEdit(e, modalContent, entry, index) {
        e.preventDefault();
        const modalRef = this.modalService.open(modalContent, { size: 'lg' });
        modalRef.result.then((result) => { }, (reason) => { });
        this.modalTitle = 'Edit';
        this.setFormValue(this.editFnData(entry));
        this.onModalEdit = (e) => {
            e.preventDefault();
            if (this.modalForm.valid) {
                modalRef.close();
                this.service.post('edit', this.isFormData ? this.getFormData() : this.getFormValue(entry));
                this.inProcess = [...this.inProcess, entry.id];
            }
        };
    }
    onRemove(e, entry, index) {
        e.preventDefault();
        this.service.post('remove', { id: entry.id });
        this.inProcess = [...this.inProcess, entry.id];
    }
    onDelete(e, modalContent, entry, index) {
        e.preventDefault();
        const modalRef = this.modalService.open(modalContent, { size: 'sm' });
        modalRef.result.then((result) => { }, (reason) => { });
        this.deletedId = entry.id;
        this.onModalConfirm = (e) => {
            e.preventDefault();
            this.service.post('delete', { id: entry.id });
            this.inProcess = [...this.inProcess, entry.id];
            modalRef.close();
        };
    }
    onCreate(e, modalContent) {
        e.preventDefault();
        const modalRef = this.modalService.open(modalContent, { size: 'lg' });
        modalRef.result.then((result) => { }, (reason) => { this.addError = ''; });
        this.addModalRef = modalRef;
        this.modalTitle = 'Create';
        this.setFormValue(this.emptyObject(this.getFormValue()));
        this.onModalEdit = (e) => {
            e.preventDefault();
            if (this.modalForm.valid) {
                this.service.post('add', this.isFormData ? this.getFormData() : this.getFormValue());
                this.addProcess = true;
                this.addError = '';
            }
        };
    }
    onMore(e) {
        e.preventDefault();
        if (this.currentPage < 1)
            this.currentPage = 1;
        this.service.get('gets', { params: { page: this.currentPage } });
        this.currentPage++;
        this.moreProcess = true;
    }
    patchData(data) {
        this.data = this.data.map((item) => {
            if (item.id === data.id) {
                let keys = Object.keys(data);
                keys.map((key) => {
                    item[key] = data[key];
                });
            }
            return item;
        });
        this.inProcess = this.inProcess.filter((item) => item !== data.id);
    }
    filterData(data) {
        this.data = this.data.filter((item) => {
            return item.id !== data.id;
        });
        this.inProcess = this.inProcess.filter((item) => item !== data.id);
    }
    filterError(e) {
        let id = e.error.id;
        this.inProcess = this.inProcess.filter((item) => item !== id);
    }
    injectErrorAdd(e) {
        this.addError = e.error.reason;
        this.addProcess = false;
    }
    injectData(data) {
        if (data.length === 0)
            this.currentPage--;
        this.data = [...this.data, ...data];
        this.moreProcess = false;
    }
    injectOneData(data) {
        this.data = [data, ...this.data];
        this.addProcess = false;
        try {
            this.addModalRef.close();
        }
        catch (e) { }
    }
    injectAddData(data) {
        this.data = [...data, ...this.data];
        this.addProcess = false;
        try {
            this.addModalRef.close();
        }
        catch (e) { }
    }
}
BaseTableComponent.ɵfac = function BaseTableComponent_Factory(t) { return new (t || BaseTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
BaseTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaseTableComponent, selectors: [["base-table"]], inputs: { fields: "fields", isMore: "isMore", isCreate: "isCreate", isEdit: "isEdit", isRemove: "isRemove", isDelete: "isDelete", querys: "querys", service: "service", isFormData: "isFormData" }, decls: 20, vars: 8, consts: [[1, "container-md"], [1, "row", "align-items-center", "justify-content-end"], ["class", "col-auto align-self-end", 4, "ngIf"], [1, "row", "text-center"], [4, "ngFor", "ngForOf"], [1, "cell-removed", "col-auto"], [1, "h5"], [1, "cell-actions", "col-auto"], [1, ""], [1, "row", "justify-content-center"], ["class", "col-6", 4, "ngIf"], ["modal_edit", ""], ["modal_confirm", ""], [1, "col-auto", "align-self-end"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "col-auto"], ["class", "row mt-1 mb-1", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "row", "mt-1", "mb-1"], [1, "col-auto", "text-center"], [4, "ngIf"], ["href", "#", "class", "btn-sm text-decoration-none btn-primary", 3, "click", 4, "ngIf"], ["href", "#", 1, "btn-sm", "text-decoration-none", "btn-primary", 3, "click"], ["href", "#", "class", "btn-sm text-decoration-none btn-secondary", 3, "click", 4, "ngIf"], ["href", "#", 1, "btn-sm", "text-decoration-none", "btn-secondary", 3, "click"], ["href", "#", 1, "btn-sm", "text-decoration-none", "btn-danger", 3, "click"], [1, "d-flex", "align-items-center"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "ml-auto"], [1, "col-6"], ["type", "button", 1, "btn", "btn-info", 3, "disabled", "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["href", "#", 1, "btn", "btn-danger", "text-decoration-none", 3, "click"], [1, "modal-body"], [1, "modal-footer", "justify-content-center"], ["href", "#", 1, "btn", "btn-secondary", "text-decoration-none", 3, "click"], ["href", "#", 1, "btn", "btn-success", "text-decoration-none", 3, "click"], [1, "alert", "alert-danger"], [1, "h3"], [1, "container-fluid", 3, "formGroup"], [1, "row", "row-cols-1"], ["class", "col row mt-1 mb-1 align-items-center", 4, "ngIf"], [1, "col", "row", "mt-1", "mb-1", "align-items-center"], [1, "h6"], [3, "type", "fn", "control"], ["role", "status", 1, "col-auto", "spinner-border", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"], [1, "h2"]], template: function BaseTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BaseTableComponent_div_2_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BaseTableComponent_ng_container_5_Template, 4, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "[x]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BaseTableComponent_ng_container_13_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BaseTableComponent_div_15_Template, 5, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BaseTableComponent_ng_template_16_Template, 19, 4, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BaseTableComponent_ng_template_18_Template, 19, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMore);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _base_field_edit_base_field_edit_component__WEBPACK_IMPORTED_MODULE_0__.BaseFieldEditComponent], encapsulation: 2 });


/***/ }),

/***/ 9258:
/*!*************************************************!*\
  !*** ./src/app/base-table/base.table.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTableModule": () => (/* binding */ BaseTableModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1510);
/* harmony import */ var _base_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.table.component */ 302);
/* harmony import */ var _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-field-edit/base.field.edit.module */ 4312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);






class BaseTableModule {
}
BaseTableModule.ɵfac = function BaseTableModule_Factory(t) { return new (t || BaseTableModule)(); };
BaseTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BaseTableModule });
BaseTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
            _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_1__.BaseFieldEditModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BaseTableModule, { declarations: [_base_table_component__WEBPACK_IMPORTED_MODULE_0__.BaseTableComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_1__.BaseFieldEditModule], exports: [_base_table_component__WEBPACK_IMPORTED_MODULE_0__.BaseTableComponent] }); })();


/***/ }),

/***/ 3769:
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.service */ 9318);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reviews/reviews.service */ 4948);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);





const _c0 = ["baseTable"];
class CommentsComponent {
    constructor(commentsService, usersService, reviewsService) {
        this.commentsService = commentsService;
        this.usersService = usersService;
        this.reviewsService = reviewsService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'add', method: 'POST', success: (data) => this.baseTable.injectOneData(data), error: (e) => this.baseTable.injectErrorAdd(e) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "user", title: "user", width: 15, viewFn: (entry) => {
                    let datas = [];
                    if (entry.user)
                        datas.push(entry.user);
                    if (entry.social_id)
                        datas.push(entry.social_id);
                    return datas.join('/');
                }, editTitle: 'user', editType: 'select', formControlName: 'userId', editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.usersService.source('short-user-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => {
                                let datas = [];
                                if (entry.user)
                                    datas.push(entry.user);
                                if (entry.social_id)
                                    datas.push(entry.social_id);
                                datas = datas.join('/');
                                return { value: entry.id, title: datas };
                            }));
                        });
                        this.usersService.get('short-user-gets');
                    });
                } },
            { name: "review", title: "review(title)", width: 15, viewFn: (data) => {
                    return 'id:' + data.id + '->' + data.groupTitle.group.group + '/' + data.groupTitle.title.title;
                }, editTitle: 'review', editType: 'select', formControlName: 'reviewId', editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.reviewsService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => {
                                return { value: entry.id, title: 'id:' + entry.id + '->' + entry.groupTitle.group.group + '/' + entry.groupTitle.title.title };
                            }));
                        });
                        this.reviewsService.get('short-gets');
                    });
                } },
            { name: "comment", title: "user comment", width: 30, editTitle: 'user comment', editType: 'textarea', formControlName: 'comment' },
            { name: "draft", title: "draft", width: 5, editTitle: 'is draft', editType: 'checkbox', formControlName: 'draft' },
            { name: "blocked", title: "ban", width: 5, editTitle: 'is ban', editType: 'checkbox', formControlName: 'blocked' }
        ];
        this.service = this.commentsService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_comments_service__WEBPACK_IMPORTED_MODULE_0__.CommentsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__.ReviewsService)); };
CommentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["comments"]], viewQuery: function CommentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_3__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 1530:
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsModule": () => (/* binding */ CommentsModule)
/* harmony export */ });
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.component */ 3769);
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.service */ 9318);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class CommentsModule {
}
CommentsModule.ɵfac = function CommentsModule_Factory(t) { return new (t || CommentsModule)(); };
CommentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CommentsModule });
CommentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _comments_service__WEBPACK_IMPORTED_MODULE_1__.CommentsService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CommentsModule, { declarations: [_comments_component__WEBPACK_IMPORTED_MODULE_0__.CommentsComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_comments_component__WEBPACK_IMPORTED_MODULE_0__.CommentsComponent] }); })();


/***/ }),

/***/ 9318:
/*!**********************************************!*\
  !*** ./src/app/comments/comments.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsService": () => (/* binding */ CommentsService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class CommentsService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/comments');
        this.addEntry('add', 'POST', '/admin/api/comments/add');
        this.addEntry('edit', 'POST', '/admin/api/comments/edit');
        this.addEntry('remove', 'POST', '/admin/api/comments/remove');
        this.addEntry('delete', 'POST', '/admin/api/comments/delete');
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CommentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac });


/***/ }),

/***/ 2128:
/*!************************************************!*\
  !*** ./src/app/fetch-service/fetch.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchServiceError": () => (/* binding */ FetchServiceError),
/* harmony export */   "FetchService": () => (/* binding */ FetchService)
/* harmony export */ });
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8365);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4108);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 16);




class FetchServiceError extends Error {}
class FetchService {
  constructor(http) {
    this.http = http;
    this.storage = {};

    if (!(this.http instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)) {
      throw new FetchServiceError('An instance of the "HttpClient" class must be passed to the constructor');
    }
  }

  get(namespace, options = {}) {
    return this.fetch(namespace, 'GET', null, options);
  }

  post(namespace, data = null, options = {}) {
    return this.fetch(namespace, 'POST', data, options);
  }

  fetch(namespace, method, data, options) {
    namespace += method;

    if (!this.storage.hasOwnProperty(namespace)) {
      throw new FetchServiceError(`The entity for "${namespace}"(${method}) is not defined`);
    }

    let entry = this.storage[namespace];

    if (entry.query) {
      entry.query.unsubscribe();
      entry.query = null;
    }

    let query;

    if (method === 'GET') {
      query = this.http.get(entry.url, Object.assign({}, entry.options, options));
    } else {
      query = this.http.post(entry.url, data, Object.assign({}, entry.options, options));
    }

    entry.query = query.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(e => {
      entry.query.unsubscribe();
      entry.query = null;
      this.pushError(namespace, e);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
    })).subscribe(data => {
      this.push(namespace, data);
    });
    return this;
  } // Observable


  source(namespace, method = "GET") {
    namespace += method;

    if (!this.storage.hasOwnProperty(namespace)) {
      throw new FetchServiceError(`The entity for "${namespace}" is not defined`);
    }

    let entry = this.storage[namespace];
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      let f = data => {
        observer.next(data); // call-back .subscribe
      };

      entry.cbs.push(f);
      return {
        unsubscribe: () => {
          entry.cbs = entry.cbs.filter(fn => {
            return fn !== f;
          });
        }
      };
    });
  }

  error(namespace, method = "GET") {
    namespace += method;

    if (!this.storage.hasOwnProperty(namespace)) {
      throw new FetchServiceError(`The entity in Error for "${namespace}" is not defined`);
    }

    let entry = this.storage[namespace];
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      let f = data => {
        observer.next(data); // call-back .subscribe
      };

      entry.ecbs.push(f);
      return {
        unsubscribe: () => {
          entry.ecbs = entry.ecbs.filter(fn => {
            return fn !== f;
          });
        }
      };
    });
  }

  push(namespace, data) {
    let entry = this.storage[namespace];
    entry.middleware.call(this, data).then(data => {
      this.storage[namespace].cbs.map(f => {
        f.call(null, data);
      });
    }).catch(e => {
      throw e;
    });
    return this;
  }

  pushError(namespace, data) {
    this.storage[namespace].ecbs.map(f => {
      f.call(null, data);
    });
  }

  addEntry(namespace, method, url, middleware = /*#__PURE__*/function () {
    var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (a) {
      return a;
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), options = {}) {
    this.storage[namespace + method] = {
      cbs: [],
      ecbs: [],
      url,
      options,
      middleware,
      query: null
    };
    return this;
  }

}

/***/ }),

/***/ 2978:
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsComponent": () => (/* binding */ GroupsComponent)
/* harmony export */ });
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.service */ 2510);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);




const _c0 = ["baseTable"];
class GroupsComponent {
  constructor(groupsService) {
    this.groupsService = groupsService;
    this.querys = [{
      namespace: 'gets',
      method: 'GET',
      success: data => this.baseTable.injectData(data)
    }, {
      namespace: 'add',
      method: 'POST',
      success: data => this.baseTable.injectOneData(data),
      error: e => this.baseTable.injectErrorAdd(e)
    }, {
      namespace: 'edit',
      method: 'POST',
      success: data => this.baseTable.patchData(data),
      error: e => this.baseTable.filterError(e)
    }, {
      namespace: 'remove',
      method: 'POST',
      success: data => this.baseTable.patchData(data),
      error: e => this.baseTable.filterError(e)
    }, {
      namespace: 'delete',
      method: 'POST',
      success: data => this.baseTable.filterData(data),
      error: e => this.baseTable.filterError(e)
    }];
    this.fields = [{
      name: "id",
      title: "id",
      width: 5
    }, {
      name: "group",
      title: "group",
      width: 25,
      editTitle: 'Unique group name',
      editType: 'input',
      formControlName: 'group',
      editRequire: true,
      viewFn: data => {
        return data;
      }
    }, {
      name: "description",
      title: "description",
      width: 45,
      editTitle: 'Group description',
      editType: 'textarea',
      formControlName: 'description',
      editFn: data => {
        return data;
      },
      editReceiveFn: function () {
        var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {});

        return function editReceiveFn() {
          return _ref.apply(this, arguments);
        };
      }()
    }];
    this.service = this.groupsService;
  }

  ngAfterViewInit() {
    this.baseTable.refreshSettings();
  }

}

GroupsComponent.ɵfac = function GroupsComponent_Factory(t) {
  return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_groups_service__WEBPACK_IMPORTED_MODULE_1__.GroupsService));
};

GroupsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GroupsComponent,
  selectors: [["groups"]],
  viewQuery: function GroupsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    }
  },
  decls: 2,
  vars: 6,
  consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]],
  template: function GroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "base-table", 0, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    }
  },
  directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_2__.BaseTableComponent],
  encapsulation: 2
});

/***/ }),

/***/ 1513:
/*!*****************************************!*\
  !*** ./src/app/groups/groups.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsModule": () => (/* binding */ GroupsModule)
/* harmony export */ });
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups.component */ 2978);
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.service */ 2510);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class GroupsModule {
}
GroupsModule.ɵfac = function GroupsModule_Factory(t) { return new (t || GroupsModule)(); };
GroupsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GroupsModule });
GroupsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _groups_service__WEBPACK_IMPORTED_MODULE_1__.GroupsService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GroupsModule, { declarations: [_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent] }); })();


/***/ }),

/***/ 2510:
/*!******************************************!*\
  !*** ./src/app/groups/groups.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsService": () => (/* binding */ GroupsService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class GroupsService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/groups');
        this.addEntry('add', 'POST', '/admin/api/groups/add');
        this.addEntry('edit', 'POST', '/admin/api/groups/edit');
        this.addEntry('remove', 'POST', '/admin/api/groups/remove');
        this.addEntry('delete', 'POST', '/admin/api/groups/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/groups-short');
    }
}
GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
GroupsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GroupsService, factory: GroupsService.ɵfac });


/***/ }),

/***/ 5441:
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesComponent": () => (/* binding */ ImagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.service */ 8129);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reviews/reviews.service */ 4948);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);





const _c0 = ["baseTable"];
class ImagesComponent {
    constructor(imagesService, usersService, reviewsService) {
        this.imagesService = imagesService;
        this.usersService = usersService;
        this.reviewsService = reviewsService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'add', method: 'POST', success: (data) => this.baseTable.injectAddData(data), error: (e) => this.baseTable.injectErrorAdd(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "user", title: "user", width: 15, viewFn: (entry) => {
                    let datas = [];
                    if (entry.user)
                        datas.push(entry.user);
                    if (entry.social_id)
                        datas.push(entry.social_id);
                    return datas.join('/');
                }, editTitle: 'user', editType: 'select', formControlName: 'userId', editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.usersService.source('short-editor-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => {
                                let datas = [];
                                if (entry.user)
                                    datas.push(entry.user);
                                if (entry.social_id)
                                    datas.push(entry.social_id);
                                datas = datas.join('/');
                                return { value: entry.id, title: datas };
                            }));
                        });
                        this.usersService.get('short-editor-gets');
                    });
                } },
            { name: "url", title: "file url", width: 55, editTitle: 'images', editType: 'file-upload', formControlName: 'images' }
        ];
        this.service = this.imagesService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
ImagesComponent.ɵfac = function ImagesComponent_Factory(t) { return new (t || ImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_0__.ImagesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__.ReviewsService)); };
ImagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ImagesComponent, selectors: [["images"]], viewQuery: function ImagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 7, consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore", "isFormData"], ["baseTable", ""]], template: function ImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true)("isFormData", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_3__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 8801:
/*!*****************************************!*\
  !*** ./src/app/images/images.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesModule": () => (/* binding */ ImagesModule)
/* harmony export */ });
/* harmony import */ var _images_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.component */ 5441);
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.service */ 8129);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class ImagesModule {
}
ImagesModule.ɵfac = function ImagesModule_Factory(t) { return new (t || ImagesModule)(); };
ImagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ImagesModule });
ImagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _images_service__WEBPACK_IMPORTED_MODULE_1__.ImagesService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ImagesModule, { declarations: [_images_component__WEBPACK_IMPORTED_MODULE_0__.ImagesComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_images_component__WEBPACK_IMPORTED_MODULE_0__.ImagesComponent] }); })();


/***/ }),

/***/ 8129:
/*!******************************************!*\
  !*** ./src/app/images/images.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagesService": () => (/* binding */ ImagesService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ImagesService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/images');
        this.addEntry('add', 'POST', '/admin/api/images/add');
        this.addEntry('edit', 'POST', '/admin/api/images/edit');
        this.addEntry('remove', 'POST', '/admin/api/images/remove');
        this.addEntry('delete', 'POST', '/admin/api/images/delete');
    }
}
ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ImagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImagesService, factory: ImagesService.ɵfac });


/***/ }),

/***/ 7602:
/*!******************************************!*\
  !*** ./src/app/langs/langs.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangsComponent": () => (/* binding */ LangsComponent)
/* harmony export */ });
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _langs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./langs.service */ 2900);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);




const _c0 = ["baseTable"];
class LangsComponent {
  constructor(groupsService) {
    this.groupsService = groupsService;
    this.querys = [{
      namespace: 'gets',
      method: 'GET',
      success: data => this.baseTable.injectData(data)
    }, {
      namespace: 'add',
      method: 'POST',
      success: data => this.baseTable.injectOneData(data),
      error: e => this.baseTable.injectErrorAdd(e)
    }, {
      namespace: 'edit',
      method: 'POST',
      success: data => this.baseTable.patchData(data),
      error: e => this.baseTable.filterError(e)
    }, {
      namespace: 'remove',
      method: 'POST',
      success: data => this.baseTable.patchData(data),
      error: e => this.baseTable.filterError(e)
    }, {
      namespace: 'delete',
      method: 'POST',
      success: data => this.baseTable.filterData(data),
      error: e => this.baseTable.filterError(e)
    }];
    this.fields = [{
      name: "id",
      title: "id",
      width: 5
    }, {
      name: "lang",
      title: "lang",
      width: 10,
      editTitle: 'Unique lang name',
      editType: 'input',
      formControlName: 'lang',
      editRequire: true
    }, {
      name: "title",
      title: "title",
      width: 20,
      editTitle: 'display name',
      editType: 'input',
      formControlName: 'title'
    }, {
      name: "description",
      title: "description",
      width: 35,
      editTitle: 'Lang description',
      editType: 'textarea',
      formControlName: 'description',
      editFn: data => {
        return data;
      },
      editReceiveFn: function () {
        var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {});

        return function editReceiveFn() {
          return _ref.apply(this, arguments);
        };
      }()
    }];
    this.service = this.groupsService;
  }

  ngAfterViewInit() {
    this.baseTable.refreshSettings();
  }

}

LangsComponent.ɵfac = function LangsComponent_Factory(t) {
  return new (t || LangsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_langs_service__WEBPACK_IMPORTED_MODULE_1__.LangsService));
};

LangsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LangsComponent,
  selectors: [["langs"]],
  viewQuery: function LangsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    }
  },
  decls: 2,
  vars: 6,
  consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]],
  template: function LangsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "base-table", 0, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    }
  },
  directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_2__.BaseTableComponent],
  encapsulation: 2
});

/***/ }),

/***/ 6923:
/*!***************************************!*\
  !*** ./src/app/langs/langs.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangsModule": () => (/* binding */ LangsModule)
/* harmony export */ });
/* harmony import */ var _langs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./langs.component */ 7602);
/* harmony import */ var _langs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./langs.service */ 2900);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class LangsModule {
}
LangsModule.ɵfac = function LangsModule_Factory(t) { return new (t || LangsModule)(); };
LangsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LangsModule });
LangsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _langs_service__WEBPACK_IMPORTED_MODULE_1__.LangsService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LangsModule, { declarations: [_langs_component__WEBPACK_IMPORTED_MODULE_0__.LangsComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_langs_component__WEBPACK_IMPORTED_MODULE_0__.LangsComponent] }); })();


/***/ }),

/***/ 2900:
/*!****************************************!*\
  !*** ./src/app/langs/langs.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangsService": () => (/* binding */ LangsService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class LangsService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/langs');
        this.addEntry('add', 'POST', '/admin/api/langs/add');
        this.addEntry('edit', 'POST', '/admin/api/langs/edit');
        this.addEntry('remove', 'POST', '/admin/api/langs/remove');
        this.addEntry('delete', 'POST', '/admin/api/langs/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/langs-short');
    }
}
LangsService.ɵfac = function LangsService_Factory(t) { return new (t || LangsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
LangsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LangsService, factory: LangsService.ɵfac });


/***/ }),

/***/ 2531:
/*!******************************************!*\
  !*** ./src/app/likes/likes.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikesComponent": () => (/* binding */ LikesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _likes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.service */ 3252);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reviews/reviews.service */ 4948);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);





const _c0 = ["baseTable"];
class LikesComponent {
    constructor(likesService, usersService, reviewsService) {
        this.likesService = likesService;
        this.usersService = usersService;
        this.reviewsService = reviewsService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'add', method: 'POST', success: (data) => this.baseTable.injectOneData(data), error: (e) => this.baseTable.injectErrorAdd(e) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "user", title: "user", width: 25, viewFn: (entry) => {
                    let datas = [];
                    if (entry.user)
                        datas.push(entry.user);
                    if (entry.social_id)
                        datas.push(entry.social_id);
                    return datas.join('/');
                }, editTitle: 'user', editType: 'select', formControlName: 'userId', editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.usersService.source('short-user-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => {
                                let datas = [];
                                if (entry.user)
                                    datas.push(entry.user);
                                if (entry.social_id)
                                    datas.push(entry.social_id);
                                datas = datas.join('/');
                                return { value: entry.id, title: datas };
                            }));
                        });
                        this.usersService.get('short-user-gets');
                    });
                } },
            { name: "review", title: "review(title)", width: 25, viewFn: (data) => {
                    return 'id:' + data.id + '->' + data.groupTitle.group.group + '/' + data.groupTitle.title.title;
                }, editTitle: 'review', editType: 'select', formControlName: 'reviewId', editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.reviewsService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => {
                                return { value: entry.id, title: 'id:' + entry.id + '->' + entry.groupTitle.group.group + '/' + entry.groupTitle.title.title };
                            }));
                        });
                        this.reviewsService.get('short-gets');
                    });
                } },
            { name: "like", title: "user like", width: 20, editTitle: 'like', editType: 'checkbox', formControlName: 'like' }
        ];
        this.service = this.likesService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
LikesComponent.ɵfac = function LikesComponent_Factory(t) { return new (t || LikesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_likes_service__WEBPACK_IMPORTED_MODULE_0__.LikesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__.ReviewsService)); };
LikesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LikesComponent, selectors: [["likes"]], viewQuery: function LikesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]], template: function LikesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_3__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 6603:
/*!***************************************!*\
  !*** ./src/app/likes/likes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikesModule": () => (/* binding */ LikesModule)
/* harmony export */ });
/* harmony import */ var _likes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.component */ 2531);
/* harmony import */ var _likes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.service */ 3252);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class LikesModule {
}
LikesModule.ɵfac = function LikesModule_Factory(t) { return new (t || LikesModule)(); };
LikesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LikesModule });
LikesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _likes_service__WEBPACK_IMPORTED_MODULE_1__.LikesService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LikesModule, { declarations: [_likes_component__WEBPACK_IMPORTED_MODULE_0__.LikesComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_likes_component__WEBPACK_IMPORTED_MODULE_0__.LikesComponent] }); })();


/***/ }),

/***/ 3252:
/*!****************************************!*\
  !*** ./src/app/likes/likes.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikesService": () => (/* binding */ LikesService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class LikesService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/likes');
        this.addEntry('add', 'POST', '/admin/api/likes/add');
        this.addEntry('edit', 'POST', '/admin/api/likes/edit');
        this.addEntry('remove', 'POST', '/admin/api/likes/remove');
        this.addEntry('delete', 'POST', '/admin/api/likes/delete');
    }
}
LikesService.ɵfac = function LikesService_Factory(t) { return new (t || LikesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
LikesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LikesService, factory: LikesService.ɵfac });


/***/ }),

/***/ 8018:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5681);


const _c0 = function () { return ["/titles"]; };
const _c1 = function () { return ["/title-groups"]; };
const _c2 = function () { return ["/groups"]; };
const _c3 = function () { return ["/roles"]; };
const _c4 = function () { return ["/themes"]; };
const _c5 = function () { return ["/langs"]; };
const _c6 = function () { return ["/user-roles"]; };
const _c7 = function () { return ["/users"]; };
const _c8 = function () { return ["/user-infos"]; };
const _c9 = function () { return ["/reviews"]; };
const _c10 = function () { return ["/tags"]; };
const _c11 = function () { return ["/review-tags"]; };
const _c12 = function () { return ["/ratings"]; };
const _c13 = function () { return ["/likes"]; };
const _c14 = function () { return ["/comments"]; };
const _c15 = function () { return ["/images"]; };
class MainComponent {
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["main"]], decls: 53, vars: 32, consts: [["routerLinkActive", "active", 3, "routerLink"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "titles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "title-groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "langs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "user-roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "user-infos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "review-tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c15));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 4531:
/*!**********************************************!*\
  !*** ./src/app/ratings/ratings.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsComponent": () => (/* binding */ RatingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ratings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings.service */ 3111);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reviews/reviews.service */ 4948);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);





const _c0 = ["baseTable"];
class RatingsComponent {
    constructor(ratingsService, usersService, reviewsService) {
        this.ratingsService = ratingsService;
        this.usersService = usersService;
        this.reviewsService = reviewsService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'add', method: 'POST', success: (data) => this.baseTable.injectOneData(data), error: (e) => this.baseTable.injectErrorAdd(e) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "user", title: "user", width: 25, viewFn: (entry) => {
                    let datas = [];
                    if (entry.user)
                        datas.push(entry.user);
                    if (entry.social_id)
                        datas.push(entry.social_id);
                    return datas.join('/');
                }, editTitle: 'user', editType: 'select', formControlName: 'userId', editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.usersService.source('short-user-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => {
                                let datas = [];
                                if (entry.user)
                                    datas.push(entry.user);
                                if (entry.social_id)
                                    datas.push(entry.social_id);
                                datas = datas.join('/');
                                return { value: entry.id, title: datas };
                            }));
                        });
                        this.usersService.get('short-user-gets');
                    });
                } },
            { name: "review", title: "review(title)", width: 25, viewFn: (data) => {
                    return 'id:' + data.id + '->' + data.groupTitle.group.group + '/' + data.groupTitle.title.title;
                }, editTitle: 'review', editType: 'select', formControlName: 'reviewId', editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.reviewsService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => {
                                return { value: entry.id, title: 'id:' + entry.id + '->' + entry.groupTitle.group.group + '/' + entry.groupTitle.title.title };
                            }));
                        });
                        this.reviewsService.get('short-gets');
                    });
                } },
            { name: "userRating", title: "user rating", width: 20, editTitle: 'rating', editType: 'select', formControlName: 'rating', editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        res([1, 2, 3, 4, 5].map((item) => { return { value: item, title: item }; }));
                    });
                } }
        ];
        this.service = this.ratingsService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
RatingsComponent.ɵfac = function RatingsComponent_Factory(t) { return new (t || RatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ratings_service__WEBPACK_IMPORTED_MODULE_0__.RatingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__.ReviewsService)); };
RatingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RatingsComponent, selectors: [["ratings"]], viewQuery: function RatingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]], template: function RatingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_3__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 8219:
/*!*******************************************!*\
  !*** ./src/app/ratings/ratings.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsModule": () => (/* binding */ RatingsModule)
/* harmony export */ });
/* harmony import */ var _ratings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings.component */ 4531);
/* harmony import */ var _ratings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratings.service */ 3111);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class RatingsModule {
}
RatingsModule.ɵfac = function RatingsModule_Factory(t) { return new (t || RatingsModule)(); };
RatingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RatingsModule });
RatingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _ratings_service__WEBPACK_IMPORTED_MODULE_1__.RatingsService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RatingsModule, { declarations: [_ratings_component__WEBPACK_IMPORTED_MODULE_0__.RatingsComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_ratings_component__WEBPACK_IMPORTED_MODULE_0__.RatingsComponent] }); })();


/***/ }),

/***/ 3111:
/*!********************************************!*\
  !*** ./src/app/ratings/ratings.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsService": () => (/* binding */ RatingsService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class RatingsService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/ratings');
        this.addEntry('add', 'POST', '/admin/api/ratings/add');
        this.addEntry('edit', 'POST', '/admin/api/ratings/edit');
        this.addEntry('remove', 'POST', '/admin/api/ratings/remove');
        this.addEntry('delete', 'POST', '/admin/api/ratings/delete');
    }
}
RatingsService.ɵfac = function RatingsService_Factory(t) { return new (t || RatingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RatingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RatingsService, factory: RatingsService.ɵfac });


/***/ }),

/***/ 5778:
/*!******************************************************!*\
  !*** ./src/app/review-tags/review.tags.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewTagsComponent": () => (/* binding */ ReviewTagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _review_tags_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.tags.service */ 6425);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);



const _c0 = ["baseTable"];
class ReviewTagsComponent {
    constructor(reviewTagsService) {
        this.reviewTagsService = reviewTagsService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
        ];
        this.fields = [
            { name: "reviewId", title: "reviewId", width: 40 },
            { name: "tagId", title: "tagId", width: 35 }
        ];
        this.service = this.reviewTagsService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
ReviewTagsComponent.ɵfac = function ReviewTagsComponent_Factory(t) { return new (t || ReviewTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_review_tags_service__WEBPACK_IMPORTED_MODULE_0__.ReviewTagsService)); };
ReviewTagsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReviewTagsComponent, selectors: [["review-tags"]], viewQuery: function ReviewTagsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isRemove", "isDelete", "isMore"], ["baseTable", ""]], template: function ReviewTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isRemove", false)("isDelete", false)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 61:
/*!***************************************************!*\
  !*** ./src/app/review-tags/review.tags.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewTagsModule": () => (/* binding */ ReviewTagsModule)
/* harmony export */ });
/* harmony import */ var _review_tags_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review.tags.component */ 5778);
/* harmony import */ var _review_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review.tags.service */ 6425);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class ReviewTagsModule {
}
ReviewTagsModule.ɵfac = function ReviewTagsModule_Factory(t) { return new (t || ReviewTagsModule)(); };
ReviewTagsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReviewTagsModule });
ReviewTagsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _review_tags_service__WEBPACK_IMPORTED_MODULE_1__.ReviewTagsService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReviewTagsModule, { declarations: [_review_tags_component__WEBPACK_IMPORTED_MODULE_0__.ReviewTagsComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_review_tags_component__WEBPACK_IMPORTED_MODULE_0__.ReviewTagsComponent] }); })();


/***/ }),

/***/ 6425:
/*!****************************************************!*\
  !*** ./src/app/review-tags/review.tags.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewTagsService": () => (/* binding */ ReviewTagsService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ReviewTagsService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/review-tags');
    }
}
ReviewTagsService.ɵfac = function ReviewTagsService_Factory(t) { return new (t || ReviewTagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ReviewTagsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReviewTagsService, factory: ReviewTagsService.ɵfac });


/***/ }),

/***/ 5534:
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsComponent": () => (/* binding */ ReviewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _reviews_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.service */ 4948);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../groups/groups.service */ 2510);
/* harmony import */ var _titles_titles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../titles/titles.service */ 7260);
/* harmony import */ var _tags_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tags/tags.service */ 2124);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);







const _c0 = ["baseTable"];
class ReviewsComponent {
    constructor(reviewsService, usersService, groupsService, titlesService, tagsService) {
        this.reviewsService = reviewsService;
        this.usersService = usersService;
        this.groupsService = groupsService;
        this.titlesService = titlesService;
        this.tagsService = tagsService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'add', method: 'POST', success: (data) => this.baseTable.injectOneData(data), error: (e) => this.baseTable.injectErrorAdd(e) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "groupTitle", title: "title", width: 10, viewFn: (data) => {
                    return data.group.group + '/' + data.title.title;
                } },
            //{name: "title", title: "title", width: 5, editTitle: 'title', editType: 'input', formControlName: 'title', editRequire: true},
            { name: "description", title: "description", width: 15, editTitle: 'Description', editType: 'textarea', formControlName: 'description', editRequire: true, viewFn: (data) => { return data.substring(0, 100); } },
            //{name: "text", title: "text", width: 5, editTitle: 'text review', editType: 'textarea', formControlName: 'text', editRequire: true, viewFn: (data: any) => {return data.substring(0, 255)}},
            { name: "authorRating", title: "AR", width: 5, editTitle: 'Author Rating', editType: 'select', formControlName: 'authorRating', editRequire: true, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        res([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => { return { value: item, title: item }; }));
                    });
                } },
            { name: "averageEditorRating", title: "AER", width: 5 },
            { name: "averageUserRating", title: "AUR", width: 5 },
            { name: "user", title: "user", width: 10, viewFn: (entry) => {
                    let datas = [];
                    if (entry.user)
                        datas.push(entry.user);
                    if (entry.social_id)
                        datas.push(entry.social_id);
                    return datas.join('/');
                }, editTitle: 'author content', editType: 'select', formControlName: 'userId', editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.usersService.source('short-editor-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => {
                                let datas = [];
                                if (entry.user)
                                    datas.push(entry.user);
                                if (entry.social_id)
                                    datas.push(entry.social_id);
                                datas = datas.join('/');
                                return { value: entry.id, title: datas };
                            }));
                        });
                        this.usersService.get('short-editor-gets');
                    });
                } },
            { name: "groupTitle", title: "G", width: 5, viewFn: (data) => { return data.group.group; }, editTitle: 'group', editType: 'select', formControlName: 'groupId', editFn: (data) => {
                    return data.group.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.groupsService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => { return { value: entry.id, title: entry.group }; }));
                        });
                        this.groupsService.get('short-gets');
                    });
                } },
            { name: "groupTitle", title: "T", width: 5, viewFn: (data) => { return data.title.title; }, editTitle: 'title', editType: 'select', formControlName: 'titleId', editFn: (data) => {
                    return data.title.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.titlesService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => { return { value: entry.id, title: entry.title }; }));
                        });
                        this.titlesService.get('short-gets');
                    });
                } },
            { name: "draft", title: "draft", width: 5, editTitle: 'is draft', editType: 'checkbox', formControlName: 'draft' },
            { name: "tags", title: "tags", width: 5, editTitle: 'tags', editType: 'multi-select', formControlName: 'tags', viewFn: (data) => {
                    return data.map((item) => item.tag).join(', ');
                }, editFn: (data) => {
                    return data.map((item) => item.id);
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.tagsService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => { return { value: entry.id, title: entry.tag }; }));
                        });
                        this.tagsService.get('short-gets');
                    });
                } }
        ];
        this.service = this.reviewsService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_reviews_service__WEBPACK_IMPORTED_MODULE_0__.ReviewsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__.GroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_titles_titles_service__WEBPACK_IMPORTED_MODULE_3__.TitlesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_tags_tags_service__WEBPACK_IMPORTED_MODULE_4__.TagsService)); };
ReviewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ReviewsComponent, selectors: [["reviews"]], viewQuery: function ReviewsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_5__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 9441:
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsModule": () => (/* binding */ ReviewsModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _reviews_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.component */ 5534);
/* harmony import */ var _reviews_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.service */ 4948);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-field-edit/base.field.edit.module */ 4312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







class ReviewsModule {
}
ReviewsModule.ɵfac = function ReviewsModule_Factory(t) { return new (t || ReviewsModule)(); };
ReviewsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ReviewsModule });
ReviewsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _reviews_service__WEBPACK_IMPORTED_MODULE_1__.ReviewsService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_3__.BaseFieldEditModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReviewsModule, { declarations: [_reviews_component__WEBPACK_IMPORTED_MODULE_0__.ReviewsComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_3__.BaseFieldEditModule], exports: [_reviews_component__WEBPACK_IMPORTED_MODULE_0__.ReviewsComponent] }); })();


/***/ }),

/***/ 4948:
/*!********************************************!*\
  !*** ./src/app/reviews/reviews.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsService": () => (/* binding */ ReviewsService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ReviewsService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/reviews');
        this.addEntry('add', 'POST', '/admin/api/reviews/add');
        this.addEntry('edit', 'POST', '/admin/api/reviews/edit');
        this.addEntry('remove', 'POST', '/admin/api/reviews/remove');
        this.addEntry('delete', 'POST', '/admin/api/reviews/delete');
        this.addEntry('gets', 'GET', '/admin/api/reviews');
        this.addEntry('short-gets', 'GET', '/admin/api/reviews-short');
    }
}
ReviewsService.ɵfac = function ReviewsService_Factory(t) { return new (t || ReviewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ReviewsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReviewsService, factory: ReviewsService.ɵfac });


/***/ }),

/***/ 5218:
/*!******************************************!*\
  !*** ./src/app/roles/roles.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesComponent": () => (/* binding */ RolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.service */ 7776);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);



const _c0 = ["baseTable"];
class RolesComponent {
    constructor(rolesService) {
        this.rolesService = rolesService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'add', method: 'POST', success: (data) => this.baseTable.injectOneData(data), error: (e) => this.baseTable.injectErrorAdd(e) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "role", title: "role", width: 10, editTitle: 'UID role', editType: 'input', formControlName: 'role', editRequire: true },
            { name: "title", title: "title", width: 20, editTitle: 'Title role', editType: 'input', formControlName: 'title' },
            { name: "description", title: "description", width: 35, editTitle: 'Group description', editType: 'textarea', formControlName: 'description' }
        ];
        this.service = this.rolesService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_roles_service__WEBPACK_IMPORTED_MODULE_0__.RolesService)); };
RolesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RolesComponent, selectors: [["roles"]], viewQuery: function RolesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 7114:
/*!***************************************!*\
  !*** ./src/app/roles/roles.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModule": () => (/* binding */ RolesModule)
/* harmony export */ });
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.component */ 5218);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.service */ 7776);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class RolesModule {
}
RolesModule.ɵfac = function RolesModule_Factory(t) { return new (t || RolesModule)(); };
RolesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RolesModule });
RolesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _roles_service__WEBPACK_IMPORTED_MODULE_1__.RolesService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RolesModule, { declarations: [_roles_component__WEBPACK_IMPORTED_MODULE_0__.RolesComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_roles_component__WEBPACK_IMPORTED_MODULE_0__.RolesComponent] }); })();


/***/ }),

/***/ 7776:
/*!****************************************!*\
  !*** ./src/app/roles/roles.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesService": () => (/* binding */ RolesService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class RolesService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/roles');
        this.addEntry('short-gets', 'GET', '/admin/api/roles-short');
        this.addEntry('add', 'POST', '/admin/api/roles/add');
        this.addEntry('edit', 'POST', '/admin/api/roles/edit');
        this.addEntry('remove', 'POST', '/admin/api/roles/remove');
        this.addEntry('delete', 'POST', '/admin/api/roles/delete');
    }
}
RolesService.ɵfac = function RolesService_Factory(t) { return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RolesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RolesService, factory: RolesService.ɵfac });


/***/ }),

/***/ 4941:
/*!****************************************!*\
  !*** ./src/app/tags/tags.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsComponent": () => (/* binding */ TagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.service */ 2124);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);



const _c0 = ["baseTable"];
class TagsComponent {
    constructor(tagsService) {
        this.tagsService = tagsService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'add', method: 'POST', success: (data) => this.baseTable.injectOneData(data), error: (e) => this.baseTable.injectErrorAdd(e) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "tag", title: "tag", width: 60, editTitle: 'Unique tag name', editType: 'input', formControlName: 'tag', editRequire: true },
            { name: "countReview", title: "range", width: 10 },
        ];
        this.service = this.tagsService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_tags_service__WEBPACK_IMPORTED_MODULE_0__.TagsService)); };
TagsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["tags"]], viewQuery: function TagsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 4110:
/*!*************************************!*\
  !*** ./src/app/tags/tags.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsModule": () => (/* binding */ TagsModule)
/* harmony export */ });
/* harmony import */ var _tags_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags.component */ 4941);
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.service */ 2124);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class TagsModule {
}
TagsModule.ɵfac = function TagsModule_Factory(t) { return new (t || TagsModule)(); };
TagsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TagsModule });
TagsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _tags_service__WEBPACK_IMPORTED_MODULE_1__.TagsService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TagsModule, { declarations: [_tags_component__WEBPACK_IMPORTED_MODULE_0__.TagsComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_tags_component__WEBPACK_IMPORTED_MODULE_0__.TagsComponent] }); })();


/***/ }),

/***/ 2124:
/*!**************************************!*\
  !*** ./src/app/tags/tags.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsService": () => (/* binding */ TagsService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class TagsService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/tags');
        this.addEntry('add', 'POST', '/admin/api/tags/add');
        this.addEntry('edit', 'POST', '/admin/api/tags/edit');
        this.addEntry('remove', 'POST', '/admin/api/tags/remove');
        this.addEntry('delete', 'POST', '/admin/api/tags/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/tags-short');
    }
}
TagsService.ɵfac = function TagsService_Factory(t) { return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TagsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TagsService, factory: TagsService.ɵfac });


/***/ }),

/***/ 6822:
/*!********************************************!*\
  !*** ./src/app/themes/themes.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemesComponent": () => (/* binding */ ThemesComponent)
/* harmony export */ });
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes.service */ 3150);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);




const _c0 = ["baseTable"];
class ThemesComponent {
  constructor(groupsService) {
    this.groupsService = groupsService;
    this.querys = [{
      namespace: 'gets',
      method: 'GET',
      success: data => this.baseTable.injectData(data)
    }, {
      namespace: 'add',
      method: 'POST',
      success: data => this.baseTable.injectOneData(data),
      error: e => this.baseTable.injectErrorAdd(e)
    }, {
      namespace: 'edit',
      method: 'POST',
      success: data => this.baseTable.patchData(data),
      error: e => this.baseTable.filterError(e)
    }, {
      namespace: 'remove',
      method: 'POST',
      success: data => this.baseTable.patchData(data),
      error: e => this.baseTable.filterError(e)
    }, {
      namespace: 'delete',
      method: 'POST',
      success: data => this.baseTable.filterData(data),
      error: e => this.baseTable.filterError(e)
    }];
    this.fields = [{
      name: "id",
      title: "id",
      width: 5
    }, {
      name: "theme",
      title: "theme",
      width: 10,
      editTitle: 'Unique theme name',
      editType: 'input',
      formControlName: 'theme',
      editRequire: true
    }, {
      name: "title",
      title: "title",
      width: 20,
      editTitle: 'display name',
      editType: 'input',
      formControlName: 'title'
    }, {
      name: "description",
      title: "description",
      width: 35,
      editTitle: 'Theme description',
      editType: 'textarea',
      formControlName: 'description',
      editFn: data => {
        return data;
      },
      editReceiveFn: function () {
        var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {});

        return function editReceiveFn() {
          return _ref.apply(this, arguments);
        };
      }()
    }];
    this.service = this.groupsService;
  }

  ngAfterViewInit() {
    this.baseTable.refreshSettings();
  }

}

ThemesComponent.ɵfac = function ThemesComponent_Factory(t) {
  return new (t || ThemesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_themes_service__WEBPACK_IMPORTED_MODULE_1__.ThemesService));
};

ThemesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ThemesComponent,
  selectors: [["themes"]],
  viewQuery: function ThemesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    }
  },
  decls: 2,
  vars: 6,
  consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]],
  template: function ThemesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "base-table", 0, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    }
  },
  directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_2__.BaseTableComponent],
  encapsulation: 2
});

/***/ }),

/***/ 8747:
/*!*****************************************!*\
  !*** ./src/app/themes/themes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemesModule": () => (/* binding */ ThemesModule)
/* harmony export */ });
/* harmony import */ var _themes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes.component */ 6822);
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes.service */ 3150);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class ThemesModule {
}
ThemesModule.ɵfac = function ThemesModule_Factory(t) { return new (t || ThemesModule)(); };
ThemesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ThemesModule });
ThemesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _themes_service__WEBPACK_IMPORTED_MODULE_1__.ThemesService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ThemesModule, { declarations: [_themes_component__WEBPACK_IMPORTED_MODULE_0__.ThemesComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_themes_component__WEBPACK_IMPORTED_MODULE_0__.ThemesComponent] }); })();


/***/ }),

/***/ 3150:
/*!******************************************!*\
  !*** ./src/app/themes/themes.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemesService": () => (/* binding */ ThemesService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ThemesService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/themes');
        this.addEntry('add', 'POST', '/admin/api/themes/add');
        this.addEntry('edit', 'POST', '/admin/api/themes/edit');
        this.addEntry('remove', 'POST', '/admin/api/themes/remove');
        this.addEntry('delete', 'POST', '/admin/api/themes/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/themes-short');
    }
}
ThemesService.ɵfac = function ThemesService_Factory(t) { return new (t || ThemesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ThemesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemesService, factory: ThemesService.ɵfac });


/***/ }),

/***/ 9440:
/*!********************************************************!*\
  !*** ./src/app/title-groups/title.groups.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleGroupsComponent": () => (/* binding */ TitleGroupsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _title_groups_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.groups.service */ 5799);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);



const _c0 = ["baseTable"];
class TitleGroupsComponent {
    constructor(titleGroupsService) {
        this.titleGroupsService = titleGroupsService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "titleId", title: "titleId", width: 35 },
            { name: "groupId", title: "groupId", width: 35 }
        ];
        this.service = this.titleGroupsService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
TitleGroupsComponent.ɵfac = function TitleGroupsComponent_Factory(t) { return new (t || TitleGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_title_groups_service__WEBPACK_IMPORTED_MODULE_0__.TitleGroupsService)); };
TitleGroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TitleGroupsComponent, selectors: [["title-groups"]], viewQuery: function TitleGroupsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isRemove", "isDelete", "isMore"], ["baseTable", ""]], template: function TitleGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isRemove", false)("isDelete", false)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 2467:
/*!*****************************************************!*\
  !*** ./src/app/title-groups/title.groups.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleGroupsModule": () => (/* binding */ TitleGroupsModule)
/* harmony export */ });
/* harmony import */ var _title_groups_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.groups.component */ 9440);
/* harmony import */ var _title_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.groups.service */ 5799);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class TitleGroupsModule {
}
TitleGroupsModule.ɵfac = function TitleGroupsModule_Factory(t) { return new (t || TitleGroupsModule)(); };
TitleGroupsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TitleGroupsModule });
TitleGroupsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _title_groups_service__WEBPACK_IMPORTED_MODULE_1__.TitleGroupsService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TitleGroupsModule, { declarations: [_title_groups_component__WEBPACK_IMPORTED_MODULE_0__.TitleGroupsComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_title_groups_component__WEBPACK_IMPORTED_MODULE_0__.TitleGroupsComponent] }); })();


/***/ }),

/***/ 5799:
/*!******************************************************!*\
  !*** ./src/app/title-groups/title.groups.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleGroupsService": () => (/* binding */ TitleGroupsService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class TitleGroupsService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/title-groups');
    }
}
TitleGroupsService.ɵfac = function TitleGroupsService_Factory(t) { return new (t || TitleGroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TitleGroupsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TitleGroupsService, factory: TitleGroupsService.ɵfac });


/***/ }),

/***/ 1411:
/*!********************************************!*\
  !*** ./src/app/titles/titles.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitlesComponent": () => (/* binding */ TitlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _titles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./titles.service */ 7260);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);



const _c0 = ["baseTable"];
class TitlesComponent {
    constructor(titlesService) {
        this.titlesService = titlesService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'add', method: 'POST', success: (data) => this.baseTable.injectOneData(data), error: (e) => this.baseTable.injectErrorAdd(e) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "title", title: "title", width: 25, editTitle: 'Unique title name', editType: 'input', formControlName: 'title', editRequire: true, viewFn: (data) => { return data; } },
            { name: "description", title: "description", width: 45, editTitle: 'Title description', editType: 'textarea', formControlName: 'description', editFn: (data) => { return data; } }
        ];
        this.service = this.titlesService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
TitlesComponent.ɵfac = function TitlesComponent_Factory(t) { return new (t || TitlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_titles_service__WEBPACK_IMPORTED_MODULE_0__.TitlesService)); };
TitlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TitlesComponent, selectors: [["titles"]], viewQuery: function TitlesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""]], template: function TitlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", true)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 2491:
/*!*****************************************!*\
  !*** ./src/app/titles/titles.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitlesModule": () => (/* binding */ TitlesModule)
/* harmony export */ });
/* harmony import */ var _titles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./titles.component */ 1411);
/* harmony import */ var _titles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titles.service */ 7260);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class TitlesModule {
}
TitlesModule.ɵfac = function TitlesModule_Factory(t) { return new (t || TitlesModule)(); };
TitlesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TitlesModule });
TitlesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _titles_service__WEBPACK_IMPORTED_MODULE_1__.TitlesService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TitlesModule, { declarations: [_titles_component__WEBPACK_IMPORTED_MODULE_0__.TitlesComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_titles_component__WEBPACK_IMPORTED_MODULE_0__.TitlesComponent] }); })();


/***/ }),

/***/ 7260:
/*!******************************************!*\
  !*** ./src/app/titles/titles.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitlesService": () => (/* binding */ TitlesService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class TitlesService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/titles');
        this.addEntry('add', 'POST', '/admin/api/titles/add');
        this.addEntry('edit', 'POST', '/admin/api/titles/edit');
        this.addEntry('remove', 'POST', '/admin/api/titles/remove');
        this.addEntry('delete', 'POST', '/admin/api/titles/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/titles-short');
    }
}
TitlesService.ɵfac = function TitlesService_Factory(t) { return new (t || TitlesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TitlesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TitlesService, factory: TitlesService.ɵfac });


/***/ }),

/***/ 7407:
/*!****************************************************!*\
  !*** ./src/app/user-infos/user-infos.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfosComponent": () => (/* binding */ UserInfosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _user_infos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-infos.service */ 6643);
/* harmony import */ var _themes_themes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/themes.service */ 3150);
/* harmony import */ var _langs_langs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../langs/langs.service */ 2900);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);
/* harmony import */ var _base_field_edit_base_field_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-field-edit/base.field.edit.component */ 5029);











const _c0 = ["baseTable"];
function UserInfosComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 8);
} }
function UserInfosComponent_ng_template_10_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.addError);
} }
function UserInfosComponent_ng_template_10_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "user ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "base-field-edit", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r6.modalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", "70%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "select")("fn", ctx_r6.editReceiveFn)("control", ctx_r6.modalForm.get("userId"));
} }
function UserInfosComponent_ng_template_10_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function UserInfosComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Create User Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserInfosComponent_ng_template_10_Template_a_click_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const modal_r4 = restoredCtx.$implicit; $event.preventDefault(); return modal_r4.dismiss("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, UserInfosComponent_ng_template_10_ng_container_9_Template, 4, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, UserInfosComponent_ng_template_10_ng_container_10_Template, 9, 8, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, UserInfosComponent_ng_template_10_ng_container_11_Template, 5, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserInfosComponent_ng_template_10_Template_a_click_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const modal_r4 = restoredCtx.$implicit; $event.preventDefault(); return modal_r4.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserInfosComponent_ng_template_10_Template_a_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.onModalCreate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.addError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.addProcess);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.addProcess);
} }
class UserInfosComponent {
    constructor(userInfosService, themesService, langsService, usersService, modalService) {
        this.userInfosService = userInfosService;
        this.themesService = themesService;
        this.langsService = langsService;
        this.usersService = usersService;
        this.modalService = modalService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'add', method: 'POST', success: (data) => {
                    this.baseTable.injectOneData(data);
                    this.addProcess = false;
                    this.addModalRef.close();
                }, error: (e) => {
                    this.addError = e.error.reason;
                    this.addProcess = false;
                } }
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "user", title: "user", width: 20, viewFn: (entry) => {
                    let datas = [];
                    if (entry.user)
                        datas.push(entry.user);
                    if (entry.social_id)
                        datas.push(entry.social_id);
                    return datas.join('/');
                } },
            { name: "first_name", title: "name", width: 15, editTitle: 'first name', editType: 'input', formControlName: 'first_name' },
            { name: "last_name", title: "family", width: 15, editTitle: 'last name', editType: 'input', formControlName: 'last_name' },
            { name: "lang", title: "lang", width: 10, editTitle: 'lang user', editType: 'select', formControlName: 'lang', viewFn: (data) => {
                    return data.title;
                }, editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.langsService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => { return { value: entry.id, title: entry.title }; }));
                        });
                        this.langsService.get('short-gets');
                    });
                } },
            { name: "theme", title: "theme", width: 10, editTitle: 'theme user', editType: 'select', formControlName: 'theme', viewFn: (data) => {
                    return data.title;
                }, editFn: (data) => {
                    return data.id;
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.themesService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => { return { value: entry.id, title: entry.title }; }));
                        });
                        this.themesService.get('short-gets');
                    });
                } },
        ];
        //////////////////////////////////////////////////////
        this.editReceiveFn = () => {
            return new Promise((res, rej) => {
                let obs = this.usersService.source('short-gets', 'GET').subscribe((data) => {
                    obs.unsubscribe();
                    res(data.map((entry) => {
                        let datas = [];
                        if (entry.user)
                            datas.push(entry.user);
                        if (entry.social_id)
                            datas.push(entry.social_id);
                        return { value: entry.id, title: datas.join(' / ') };
                    }));
                });
                this.usersService.get('short-gets');
            });
        };
        this.addProcess = false;
        this.modalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
        });
        this.addError = '';
        this.service = this.userInfosService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
    onCreate(e, modal) {
        e.preventDefault();
        const modalRef = this.modalService.open(modal, { size: 'lg' });
        modalRef.result.then((result) => { }, (reason) => { this.addError = ''; });
        this.addModalRef = modalRef;
        this.modalForm.controls.userId.setValue(null);
    }
    onModalCreate(e) {
        e.preventDefault();
        if (this.modalForm.valid) {
            this.service.post('add', {
                userId: this.modalForm.controls.userId.value,
            });
            this.addProcess = true;
            this.addError = '';
        }
    }
}
UserInfosComponent.ɵfac = function UserInfosComponent_Factory(t) { return new (t || UserInfosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_user_infos_service__WEBPACK_IMPORTED_MODULE_0__.UserInfosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_themes_themes_service__WEBPACK_IMPORTED_MODULE_1__.ThemesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_langs_langs_service__WEBPACK_IMPORTED_MODULE_2__.LangsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal)); };
UserInfosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UserInfosComponent, selectors: [["user-infos"]], viewQuery: function UserInfosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 12, vars: 8, consts: [[1, "container-md"], [1, "row", "align-items-center", "justify-content-end"], [1, "col-auto", "align-self-end"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [3, "fields", "querys", "service", "isEdit", "isCreate", "isMore"], ["baseTable", ""], ["modal_create", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["href", "#", 1, "btn", "btn-danger", "text-decoration-none", 3, "click"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer", "justify-content-center"], [1, "col-auto"], ["href", "#", 1, "btn", "btn-secondary", "text-decoration-none", 3, "click"], ["href", "#", 1, "btn", "btn-success", "text-decoration-none", 3, "click"], [1, "alert", "alert-danger"], [1, "h3"], [1, "container-fluid", 3, "formGroup"], [1, "row", "row-cols-1"], [1, "col", "row", "mt-1", "mb-1", "align-items-center"], [1, "h6"], [3, "type", "fn", "control"], [1, "row", "justify-content-center"], ["role", "status", 1, "col-auto", "spinner-border", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"]], template: function UserInfosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserInfosComponent_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11); return ctx.onCreate($event, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, UserInfosComponent_span_5_Template, 1, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "base-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, UserInfosComponent_ng_template_10_Template, 19, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.addProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.addProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isCreate", false)("isMore", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_4__.BaseTableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _base_field_edit_base_field_edit_component__WEBPACK_IMPORTED_MODULE_5__.BaseFieldEditComponent], encapsulation: 2 });


/***/ }),

/***/ 560:
/*!*************************************************!*\
  !*** ./src/app/user-infos/user-infos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfosModule": () => (/* binding */ UserInfosModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _user_infos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-infos.component */ 7407);
/* harmony import */ var _user_infos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-infos.service */ 6643);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-field-edit/base.field.edit.module */ 4312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







class UserInfosModule {
}
UserInfosModule.ɵfac = function UserInfosModule_Factory(t) { return new (t || UserInfosModule)(); };
UserInfosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserInfosModule });
UserInfosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _user_infos_service__WEBPACK_IMPORTED_MODULE_1__.UserInfosService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_3__.BaseFieldEditModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserInfosModule, { declarations: [_user_infos_component__WEBPACK_IMPORTED_MODULE_0__.UserInfosComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _base_field_edit_base_field_edit_module__WEBPACK_IMPORTED_MODULE_3__.BaseFieldEditModule], exports: [_user_infos_component__WEBPACK_IMPORTED_MODULE_0__.UserInfosComponent] }); })();


/***/ }),

/***/ 6643:
/*!**************************************************!*\
  !*** ./src/app/user-infos/user-infos.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfosService": () => (/* binding */ UserInfosService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class UserInfosService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/user-infos');
        this.addEntry('add', 'POST', '/admin/api/user-info/add');
        this.addEntry('edit', 'POST', '/admin/api/user-info/edit');
        this.addEntry('remove', 'POST', '/admin/api/user-info/remove');
        this.addEntry('delete', 'POST', '/admin/api/user-info/delete');
    }
}
UserInfosService.ɵfac = function UserInfosService_Factory(t) { return new (t || UserInfosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserInfosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserInfosService, factory: UserInfosService.ɵfac });


/***/ }),

/***/ 2996:
/*!****************************************************!*\
  !*** ./src/app/user-roles/user.roles.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolesComponent": () => (/* binding */ UserRolesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.roles.service */ 2999);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);



const _c0 = ["baseTable"];
class UserRolesComponent {
    constructor(userRolesService) {
        this.userRolesService = userRolesService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
        ];
        this.fields = [
            { name: "userId", title: "userId", width: 30 },
            { name: "roleId", title: "roleId", width: 30 },
            { name: "selected", title: "sel", width: 10 }
        ];
        this.service = this.userRolesService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
}
UserRolesComponent.ɵfac = function UserRolesComponent_Factory(t) { return new (t || UserRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_roles_service__WEBPACK_IMPORTED_MODULE_0__.UserRolesService)); };
UserRolesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserRolesComponent, selectors: [["user-roles"]], viewQuery: function UserRolesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 2, vars: 6, consts: [[3, "fields", "querys", "service", "isRemove", "isDelete", "isMore"], ["baseTable", ""]], template: function UserRolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "base-table", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isRemove", false)("isDelete", false)("isMore", true);
    } }, directives: [_base_table_base_table_component__WEBPACK_IMPORTED_MODULE_1__.BaseTableComponent], encapsulation: 2 });


/***/ }),

/***/ 6161:
/*!*************************************************!*\
  !*** ./src/app/user-roles/user.roles.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolesModule": () => (/* binding */ UserRolesModule)
/* harmony export */ });
/* harmony import */ var _user_roles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.roles.component */ 2996);
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.roles.service */ 2999);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class UserRolesModule {
}
UserRolesModule.ɵfac = function UserRolesModule_Factory(t) { return new (t || UserRolesModule)(); };
UserRolesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserRolesModule });
UserRolesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _user_roles_service__WEBPACK_IMPORTED_MODULE_1__.UserRolesService,
    ], imports: [[
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserRolesModule, { declarations: [_user_roles_component__WEBPACK_IMPORTED_MODULE_0__.UserRolesComponent], imports: [_base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule], exports: [_user_roles_component__WEBPACK_IMPORTED_MODULE_0__.UserRolesComponent] }); })();


/***/ }),

/***/ 2999:
/*!**************************************************!*\
  !*** ./src/app/user-roles/user.roles.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRolesService": () => (/* binding */ UserRolesService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class UserRolesService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/user-roles');
    }
}
UserRolesService.ɵfac = function UserRolesService_Factory(t) { return new (t || UserRolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserRolesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserRolesService, factory: UserRolesService.ɵfac });


/***/ }),

/***/ 718:
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.service */ 9850);
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roles/roles.service */ 7776);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.component */ 302);








const _c0 = ["baseTable"];
function UsersComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
} }
function UsersComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
} }
function UsersComponent_ng_template_16_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.addSocialError);
} }
function UsersComponent_ng_template_16_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "id social network");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "vendor social network");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r9.modalSocialForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "70%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "70%");
} }
function UsersComponent_ng_template_16_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function UsersComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create User (social)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_ng_template_16_Template_a_click_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const modal_r7 = restoredCtx.$implicit; $event.preventDefault(); return modal_r7.dismiss("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UsersComponent_ng_template_16_ng_container_9_Template, 4, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, UsersComponent_ng_template_16_ng_container_10_Template, 15, 9, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, UsersComponent_ng_template_16_ng_container_11_Template, 5, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_ng_template_16_Template_a_click_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const modal_r7 = restoredCtx.$implicit; $event.preventDefault(); return modal_r7.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_ng_template_16_Template_a_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.onModalCreateSocial($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.addSocialError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.addSocialProcess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.addSocialProcess);
} }
function UsersComponent_ng_template_18_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.addClassicError);
} }
function UsersComponent_ng_template_18_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "user name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r17.modalClassicForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "70%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "70%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "70%");
} }
function UsersComponent_ng_template_18_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function UsersComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Create User (classic)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_ng_template_18_Template_a_click_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const modal_r15 = restoredCtx.$implicit; $event.preventDefault(); return modal_r15.dismiss("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UsersComponent_ng_template_18_ng_container_9_Template, 4, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, UsersComponent_ng_template_18_ng_container_10_Template, 21, 13, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, UsersComponent_ng_template_18_ng_container_11_Template, 5, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_ng_template_18_Template_a_click_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const modal_r15 = restoredCtx.$implicit; $event.preventDefault(); return modal_r15.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_ng_template_18_Template_a_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.onModalCreateClassic($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.addClassicError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.addClassicProcess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.addClassicProcess);
} }
class UsersComponent {
    constructor(usersService, rolesService, modalService) {
        this.usersService = usersService;
        this.rolesService = rolesService;
        this.modalService = modalService;
        this.querys = [
            { namespace: 'gets', method: 'GET', success: (data) => this.baseTable.injectData(data) },
            { namespace: 'edit', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'remove', method: 'POST', success: (data) => this.baseTable.patchData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'delete', method: 'POST', success: (data) => this.baseTable.filterData(data), error: (e) => this.baseTable.filterError(e) },
            { namespace: 'add-social', method: 'POST', success: (data) => {
                    this.baseTable.injectOneData(data);
                    this.addSocialProcess = false;
                    this.addModalSocialRef.close();
                }, error: (e) => {
                    this.addSocialError = e.error.reason;
                    this.addSocialProcess = false;
                } },
            { namespace: 'add', method: 'POST', success: (data) => {
                    this.baseTable.injectOneData(data);
                    this.addClassicProcess = false;
                    this.addModalClassicRef.close();
                }, error: (e) => {
                    this.addClassicError = e.error.reason;
                    this.addClassicProcess = false;
                } },
        ];
        this.fields = [
            { name: "id", title: "id", width: 5 },
            { name: "user", title: "user", width: 15, editTitle: 'Unique user name', editType: 'input', formControlName: 'user' },
            { name: "social_id", title: "sid", width: 15, editTitle: 'Social ID+vendor', editType: 'input', formControlName: 'social_id' },
            { name: "email", title: "email", width: 10, editTitle: 'user email', editType: 'input', formControlName: 'email' },
            { name: "blocked", title: "ban", width: 5, editTitle: 'The user is blocked?', editType: 'checkbox', formControlName: 'blocked' },
            { name: "activated", title: "ver", width: 5, editTitle: 'The user is verification?', editType: 'checkbox', formControlName: 'activated' },
            { name: "countUserLike", title: "likes", width: 5 },
            { name: "roles", title: "roles", width: 15, editTitle: 'roles(multiple!!!)', editType: 'multi-select', formControlName: 'roles', viewFn: (data) => {
                    return data.filter((item) => item.UserRoles.selected).map((item) => item.title).join(', ');
                }, editFn: (data) => {
                    return data.filter((item) => item.UserRoles.selected).map((item) => item.id);
                }, editReceiveFn: () => {
                    return new Promise((res, rej) => {
                        let obs = this.rolesService.source('short-gets', 'GET').subscribe((data) => {
                            obs.unsubscribe();
                            res(data.map((entry) => { return { value: entry.id, title: entry.title }; }));
                        });
                        this.rolesService.get('short-gets');
                    });
                } },
        ];
        // ..............................
        this.addSocialProcess = false;
        this.addClassicProcess = false;
        this.modalSocialForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
        this.addSocialError = '';
        this.modalClassicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
        this.addClassicError = '';
        this.service = this.usersService;
    }
    ngAfterViewInit() {
        this.baseTable.refreshSettings();
    }
    onCreateSocial(e, modal) {
        e.preventDefault();
        const modalRef = this.modalService.open(modal, { size: 'lg' });
        modalRef.result.then((result) => { }, (reason) => { this.addSocialError = ''; });
        this.addModalSocialRef = modalRef;
        this.modalSocialForm.controls.id.setValue('');
        this.modalSocialForm.controls.vendor.setValue('');
    }
    onModalCreateSocial(e) {
        e.preventDefault();
        if (this.modalSocialForm.valid) {
            this.service.post('add-social', {
                social_id: this.modalSocialForm.controls.id.value,
                vendor: this.modalSocialForm.controls.vendor.value
            });
            this.addSocialProcess = true;
            this.addSocialError = '';
        }
    }
    onCreateClassic(e, modal) {
        e.preventDefault();
        const modalRef = this.modalService.open(modal, { size: 'lg' });
        modalRef.result.then((result) => { }, (reason) => { this.addClassicError = ''; });
        this.addModalClassicRef = modalRef;
        this.modalClassicForm.controls.user.setValue('');
        this.modalClassicForm.controls.password.setValue('');
        this.modalClassicForm.controls.email.setValue('');
    }
    onModalCreateClassic(e) {
        e.preventDefault();
        if (this.modalClassicForm.valid) {
            this.service.post('add', {
                user: this.modalClassicForm.controls.user.value,
                password: this.modalClassicForm.controls.password.value,
                email: this.modalClassicForm.controls.email.value
            });
            this.addClassicProcess = true;
            this.addClassicError = '';
        }
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_roles_roles_service__WEBPACK_IMPORTED_MODULE_1__.RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["users"]], viewQuery: function UsersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.baseTable = _t.first);
    } }, decls: 20, vars: 9, consts: [[1, "container-md"], [1, "row", "align-items-center", "justify-content-end"], [1, "col-auto", "align-self-end"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], [3, "fields", "querys", "service", "isEdit", "isMore"], ["baseTable", ""], ["modal_create_social", ""], ["modal_create_classic", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["href", "#", 1, "btn", "btn-danger", "text-decoration-none", 3, "click"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer", "justify-content-center"], [1, "col-auto"], ["href", "#", 1, "btn", "btn-secondary", "text-decoration-none", 3, "click"], ["href", "#", 1, "btn", "btn-success", "text-decoration-none", 3, "click"], [1, "alert", "alert-danger"], [1, "h3"], [1, "container-fluid", 3, "formGroup"], [1, "row", "row-cols-1"], [1, "col", "row", "mt-1", "mb-1", "align-items-center"], [1, "h6"], ["type", "text", "formControlName", "id", 1, "form-control"], ["type", "input", "formControlName", "vendor", 1, "form-control"], [1, "row", "justify-content-center"], ["role", "status", 1, "col-auto", "spinner-border", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"], ["type", "text", "formControlName", "user", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17); return ctx.onCreateSocial($event, _r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UsersComponent_span_5_Template, 1, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "create social");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19); return ctx.onCreateClassic($event, _r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, UsersComponent_span_11_Template, 1, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "create classic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "base-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UsersComponent_ng_template_16_Template, 19, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, UsersComponent_ng_template_18_Template, 19, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.addSocialProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addSocialProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.addClassicProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addClassicProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fields", ctx.fields)("querys", ctx.querys)("service", ctx.service)("isEdit", true)("isMore", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _base_table_base_table_component__WEBPACK_IMPORTED_MODULE_2__.BaseTableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], encapsulation: 2 });


/***/ }),

/***/ 6477:
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ 718);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 9850);
/* harmony import */ var _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-table/base.table.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _base_table_base_table_module__WEBPACK_IMPORTED_MODULE_2__.BaseTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule], exports: [_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent] }); })();


/***/ }),

/***/ 9850:
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch-service/fetch.service */ 2128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class UsersService extends _fetch_service_fetch_service__WEBPACK_IMPORTED_MODULE_0__.FetchService {
    constructor(http) {
        super(http);
        this.addEntry('gets', 'GET', '/admin/api/users');
        this.addEntry('add-social', 'POST', '/admin/api/users/add-social');
        this.addEntry('add', 'POST', '/admin/api/users/add');
        this.addEntry('edit', 'POST', '/admin/api/users/edit');
        this.addEntry('remove', 'POST', '/admin/api/users/remove');
        this.addEntry('delete', 'POST', '/admin/api/users/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/users-short');
        this.addEntry('short-editor-gets', 'GET', '/admin/api/users-editor-short');
        this.addEntry('short-user-gets', 'GET', '/admin/api/users-user-short');
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });


/***/ }),

/***/ 1251:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 3422:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 1251);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3422)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map