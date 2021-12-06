"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["main"],{

/***/ 7425:
/*!*********************************************!*\
  !*** ./src/app/abstract.request.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractRequestError": () => (/* binding */ AbstractRequestError),
/* harmony export */   "AbstractRequestService": () => (/* binding */ AbstractRequestService)
/* harmony export */ });
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 2909);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


class AbstractRequestError extends Error {}
class AbstractRequestService {
  constructor() {
    this.storage = {};
  }

  request(opts) {
    opts = opts || {};
    return new Promise((res, rej) => {
      axios__WEBPACK_IMPORTED_MODULE_1___default()(opts).then(response => {
        res(response);
      }).catch(e => {
        if (e.response && e.response.status === 401 && opts.JWTRefreshUpdate) {
          axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: opts.JWTRefreshUpdateMethod || 'GET',
            url: opts.JWTRefreshUpdateURL
          }).then(response => {
            axios__WEBPACK_IMPORTED_MODULE_1___default()(opts).then(response => {
              res(response);
            }).catch(e => {
              rej(this.getError(e));
            });
          }).catch(e => {
            rej(this.getError(e));
            if (e.response && e.response.status === 401 && opts.JWTRefreshFailUrl) location.href = opts.JWTRefreshFailUrl;
          });
        } else {
          rej(this.getError(e));
        }
      });
    });
  }

  getError(e) {
    if (e.response) {
      if (!e.response.data) e.response.data = e;
      return e.response;
    } else if (e.request) {
      if (!e.request.data) e.request.data = e;
      return e.request;
    } else {
      if (!e.data) e.data = e;
      return e;
    }
  }

  fetch(ns, opts) {
    var _this = this;

    return (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.storage.hasOwnProperty(ns)) {
        throw new AbstractRequestError(`The entity for "${ns}" is not defined`);
      }

      const entry = _this.storage[ns];
      let newOptions = Object.assign({}, entry.options, opts || {}, {
        method: entry.method,
        url: entry.url
      });
      const startLoadFn = typeof opts.startLoadFn === 'function' ? opts.startLoadFn : entry.startLoadFn;
      const successFn = typeof opts.successFn === 'function' ? opts.successFn : entry.successFn;
      const errorLoadFn = typeof opts.errorLoadFn === 'function' ? opts.errorLoadFn : entry.errorLoadFn;
      const endLoadFn = typeof opts.endLoadFn === 'function' ? opts.endLoadFn : entry.endLoadFn;
      let data = null;

      try {
        if (startLoadFn) startLoadFn();
        let res = yield _this.request(newOptions);
        if (entry.middlewareFn) res = yield entry.middlewareFn(res);
        if (successFn) successFn(res.data);
        data = res.data;
      } catch (e) {
        if (errorLoadFn) errorLoadFn(e.data);
      } finally {
        if (endLoadFn) endLoadFn();
      }

      return data;
    })();
  }

  addEntry(namespace, method, url, options, middlewareFn, successFn, startLoadFn, endLoadFn, errorLoadFn) {
    if (this.storage.hasOwnProperty(namespace)) throw new AbstractRequestError(`An entity with the same name as ${namespace} already exists`);
    this.storage[namespace] = {
      method,
      url,
      middlewareFn,
      startLoadFn,
      endLoadFn,
      errorLoadFn,
      options: options || {}
    };
    return this;
  }

}

/***/ }),

/***/ 8438:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 5681);
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
/* harmony import */ var _refresh_tokens_refresh_tokens_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refresh-tokens/refresh.tokens.component */ 4859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 4001);




















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
    { path: 'refresh-tokens', component: _refresh_tokens_refresh_tokens_component__WEBPACK_IMPORTED_MODULE_16__.RefreshTokensComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5681);


const _c0 = function () { return ["/users"]; };
const _c1 = function () { return ["/refresh-tokens"]; };
const _c2 = function () { return ["/user-infos"]; };
const _c3 = function () { return ["/user-roles"]; };
const _c4 = function () { return ["/roles"]; };
const _c5 = function () { return ["/reviews"]; };
const _c6 = function () { return ["/tags"]; };
const _c7 = function () { return ["/review-tags"]; };
const _c8 = function () { return ["/titles"]; };
const _c9 = function () { return ["/title-groups"]; };
const _c10 = function () { return ["/groups"]; };
const _c11 = function () { return ["/themes"]; };
const _c12 = function () { return ["/langs"]; };
const _c13 = function () { return ["/ratings"]; };
const _c14 = function () { return ["/likes"]; };
const _c15 = function () { return ["/comments"]; };
const _c16 = function () { return ["/images"]; };
class AppComponent {
    constructor() {
        this.title = 'admin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 59, vars: 34, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "refresh-tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "user-infos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "user-roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "review-tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "titles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "title-groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "langs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c15));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c16));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 2750);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 8438);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6104);
/* harmony import */ var _groups_groups_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups/groups.module */ 1513);
/* harmony import */ var _titles_titles_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./titles/titles.module */ 2491);
/* harmony import */ var _title_groups_title_groups_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title-groups/title.groups.module */ 2467);
/* harmony import */ var _langs_langs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./langs/langs.module */ 6923);
/* harmony import */ var _themes_themes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes/themes.module */ 8747);
/* harmony import */ var _roles_roles_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roles/roles.module */ 7114);
/* harmony import */ var _user_roles_user_roles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-roles/user.roles.module */ 6161);
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.module */ 6477);
/* harmony import */ var _user_infos_user_infos_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-infos/user-infos.module */ 560);
/* harmony import */ var _reviews_reviews_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reviews/reviews.module */ 9441);
/* harmony import */ var _tags_tags_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tags/tags.module */ 4110);
/* harmony import */ var _review_tags_review_tags_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./review-tags/review.tags.module */ 61);
/* harmony import */ var _ratings_ratings_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ratings/ratings.module */ 8219);
/* harmony import */ var _likes_likes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./likes/likes.module */ 6603);
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comments/comments.module */ 1530);
/* harmony import */ var _images_images_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/images.module */ 8801);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _refresh_tokens_refresh_tokens_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./refresh-tokens/refresh.tokens.module */ 6131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 4001);


//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
            _refresh_tokens_refresh_tokens_module__WEBPACK_IMPORTED_MODULE_18__.RefreshTokensModule,
            _groups_groups_module__WEBPACK_IMPORTED_MODULE_2__.GroupsModule,
            _titles_titles_module__WEBPACK_IMPORTED_MODULE_3__.TitlesModule,
            _title_groups_title_groups_module__WEBPACK_IMPORTED_MODULE_4__.TitleGroupsModule,
            _langs_langs_module__WEBPACK_IMPORTED_MODULE_5__.LangsModule,
            _themes_themes_module__WEBPACK_IMPORTED_MODULE_6__.ThemesModule,
            _roles_roles_module__WEBPACK_IMPORTED_MODULE_7__.RolesModule,
            _user_roles_user_roles_module__WEBPACK_IMPORTED_MODULE_8__.UserRolesModule,
            _users_users_module__WEBPACK_IMPORTED_MODULE_9__.UsersModule,
            _user_infos_user_infos_module__WEBPACK_IMPORTED_MODULE_10__.UserInfosModule,
            _reviews_reviews_module__WEBPACK_IMPORTED_MODULE_11__.ReviewsModule,
            _tags_tags_module__WEBPACK_IMPORTED_MODULE_12__.TagsModule,
            _review_tags_review_tags_module__WEBPACK_IMPORTED_MODULE_13__.ReviewTagsModule,
            _ratings_ratings_module__WEBPACK_IMPORTED_MODULE_14__.RatingsModule,
            _likes_likes_module__WEBPACK_IMPORTED_MODULE_15__.LikesModule,
            _comments_comments_module__WEBPACK_IMPORTED_MODULE_16__.CommentsModule,
            _images_images_module__WEBPACK_IMPORTED_MODULE_17__.ImagesModule,
            //NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule,
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_24__.TooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _refresh_tokens_refresh_tokens_module__WEBPACK_IMPORTED_MODULE_18__.RefreshTokensModule,
        _groups_groups_module__WEBPACK_IMPORTED_MODULE_2__.GroupsModule,
        _titles_titles_module__WEBPACK_IMPORTED_MODULE_3__.TitlesModule,
        _title_groups_title_groups_module__WEBPACK_IMPORTED_MODULE_4__.TitleGroupsModule,
        _langs_langs_module__WEBPACK_IMPORTED_MODULE_5__.LangsModule,
        _themes_themes_module__WEBPACK_IMPORTED_MODULE_6__.ThemesModule,
        _roles_roles_module__WEBPACK_IMPORTED_MODULE_7__.RolesModule,
        _user_roles_user_roles_module__WEBPACK_IMPORTED_MODULE_8__.UserRolesModule,
        _users_users_module__WEBPACK_IMPORTED_MODULE_9__.UsersModule,
        _user_infos_user_infos_module__WEBPACK_IMPORTED_MODULE_10__.UserInfosModule,
        _reviews_reviews_module__WEBPACK_IMPORTED_MODULE_11__.ReviewsModule,
        _tags_tags_module__WEBPACK_IMPORTED_MODULE_12__.TagsModule,
        _review_tags_review_tags_module__WEBPACK_IMPORTED_MODULE_13__.ReviewTagsModule,
        _ratings_ratings_module__WEBPACK_IMPORTED_MODULE_14__.RatingsModule,
        _likes_likes_module__WEBPACK_IMPORTED_MODULE_15__.LikesModule,
        _comments_comments_module__WEBPACK_IMPORTED_MODULE_16__.CommentsModule,
        _images_images_module__WEBPACK_IMPORTED_MODULE_17__.ImagesModule,
        //NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule,
        ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_24__.TooltipModule] }); })();


/***/ }),

/***/ 1520:
/*!********************************************************!*\
  !*** ./src/app/button-modal/button.modal.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonModalComponent": () => (/* binding */ ButtonModalComponent)
/* harmony export */ });
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 482);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ 9262);
/* harmony import */ var _edit_field_edit_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-field/edit.field.component */ 2762);









function ButtonModalComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 3);
  }
}

function ButtonModalComponent_ng_template_4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "danger")("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.newError);
  }
}

function ButtonModalComponent_ng_template_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}

function ButtonModalComponent_ng_template_4_ng_container_9_form_1_ng_container_2_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field must be filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ButtonModalComponent_ng_template_4_ng_container_9_form_1_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ButtonModalComponent_ng_template_4_ng_container_9_form_1_ng_container_2_div_7_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const newField_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.errors[newField_r9.formControlName].required);
  }
}

function ButtonModalComponent_ng_template_4_ng_container_9_form_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "edit-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ButtonModalComponent_ng_template_4_ng_container_9_form_1_ng_container_2_div_7_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const newField_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("view-table-hidden-field", newField_r9.type === "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](newField_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", "75%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", newField_r9.type)("fn", newField_r9.editReceiveFn)("valid", !ctx_r8.errors[newField_r9.formControlName])("control", ctx_r8.newModalForm.get(newField_r9.formControlName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.errors[newField_r9.formControlName]);
  }
}

function ButtonModalComponent_ng_template_4_ng_container_9_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ButtonModalComponent_ng_template_4_ng_container_9_form_1_ng_container_2_Template, 8, 12, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r7.newModalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.newFields);
  }
}

function ButtonModalComponent_ng_template_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ButtonModalComponent_ng_template_4_ng_container_9_form_1_Template, 3, 2, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.ended);
  }
}

function ButtonModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modal New Entry");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonModalComponent_ng_template_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r14.modalNewRef == null ? null : ctx_r14.modalNewRef.hide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ButtonModalComponent_ng_template_4_ng_container_7_Template, 3, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ButtonModalComponent_ng_template_4_ng_container_8_Template, 5, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ButtonModalComponent_ng_template_4_ng_container_9_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonModalComponent_ng_template_4_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r16.modalNewRef == null ? null : ctx_r16.modalNewRef.hide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonModalComponent_ng_template_4_Template_button_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r17.onModalNew($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.newError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.newLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.newLoading);
  }
}

class ButtonModalComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.titleButton = 'Create';
    this.isFormData = false;
    this.newFields = [];
    this.newModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
    this.errors = {};
    this.subscribers = [];
    this.fetchNewSave = /*#__PURE__*/(0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw new Error('Callback Fetch New Save is NOT DEFINED');
    });
    this.newError = false;
    this.newLoading = false;
    this.ended = false;
  }

  ngOnInit() {
    this.newFields = this.newFields.filter(entry => entry.name !== 'id');
  }

  ngOnDestroy() {
    this.removeSubscribers();
    if (this.modalNewLink) this.modalNewLink.unsubscribe();
  }

  removeSubscribers() {
    this.subscribers.map(o => {
      o.unsubscribe();
    });
    this.subscribers = [];
  }

  refreshSettings() {
    this.removeSubscribers();
    const o = this.newFields.reduce((acc, newField) => {
      let opts = [];
      let formControl;
      if (newField.name === 'id') return acc;
      if (newField.required) opts.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);

      if (newField.type === 'select-multiple' || newField.type === 'file-upload') {
        formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([], opts);
      } else if (newField.type === 'checkbox') {
        formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false, opts);
      } else {
        formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', opts);
      }

      acc[newField.formControlName] = formControl;
      this.subscribers.push(formControl.statusChanges.subscribe(status => {
        this.errors[newField.formControlName] = status === 'VALID' ? null : formControl.errors;
      }));
      return acc;
    }, {});
    this.newModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup(o);
  }

  getDataWithEditFn(data) {
    return this.newFields.reduce((acc, entry) => {
      if (entry.name === 'id') return acc;
      acc[entry.formControlName] = entry.newFn ? entry.newFn(data[entry.name]) : data[entry.name];
      return acc;
    }, {});
  }

  setFormValue(data) {
    let fields = this.newModalForm.controls;
    Object.keys(data).map(key => {
      if (fields[key]) fields[key].setValue(data[key]);
    });
  }

  getFormData() {
    let fields = this.newModalForm.controls;
    return Object.keys(fields).reduce((formData, key) => {
      let data = fields[key].value;

      if (Array.isArray(data)) {
        for (let item of data) {
          formData.append(key + '[]', item);
        }
      } else {
        formData.append(key, data);
      }

      return formData;
    }, new FormData());
  }

  getFormValue() {
    let fields = this.newModalForm.controls;
    return Object.keys(fields).reduce((acc, key) => {
      acc[key] = fields[key].value;
      return acc;
    }, {});
  }

  onNew(e, modal) {
    var _a;

    e.preventDefault();
    this.modalNewRef = this.modalService.show(modal, {
      animated: false
    });
    this.modalNewRef.setClass('modal-dialog-centered modal-xl');
    this.modalNewLink = (_a = this.modalNewRef.onHide) === null || _a === void 0 ? void 0 : _a.subscribe(a => {
      this.newError = false;
    });
    this.onNewAddContent({});
  }

  onNewAddContent(data) {
    this.setFormValue(this.getDataWithEditFn(data));

    this.onModalNew = e => {
      e.preventDefault();

      if (this.newModalForm.valid) {
        this.newError = false;
        this.fetchNewSave({
          data: this.isFormData ? this.getFormData() : this.getFormValue(),
          successFn: result => {
            var _a; //this.ended = true;


            if (this.added && typeof this.added.added === 'function') this.added.added(result);
            (_a = this.modalNewRef) === null || _a === void 0 ? void 0 : _a.hide();
          },
          errorLoadFn: e => {
            this.newError = e.reason || e.message;
          },
          startLoadFn: () => {
            this.newLoading = true;
          },
          endLoadFn: () => {
            this.newLoading = false;
          }
        });
      }
    };
  }

}

ButtonModalComponent.ɵfac = function ButtonModalComponent_Factory(t) {
  return new (t || ButtonModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService));
};

ButtonModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ButtonModalComponent,
  selectors: [["button-modal"]],
  inputs: {
    titleButton: "titleButton",
    isFormData: "isFormData",
    newFields: "newFields",
    added: "added",
    fetchNewSave: "fetchNewSave"
  },
  decls: 6,
  vars: 3,
  consts: [["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["modal_new", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer", "justify-content-center"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [3, "type", "dismissible"], [1, "row", "justify-content-center"], ["role", "status", 1, "col-auto", "spinner-border", 2, "width", "10rem", "height", "10rem"], [1, "sr-only"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "row", "row-cols-1"], [4, "ngFor", "ngForOf"], [1, "col", "row", "mt-1", "mb-1", "align-items-center"], [1, "col-auto"], [1, "h6"], [3, "type", "fn", "valid", "control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]],
  template: function ButtonModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonModalComponent_Template_button_click_0_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

        return ctx.onNew($event, _r1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ButtonModalComponent_span_1_Template, 1, 0, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ButtonModalComponent_ng_template_4_Template, 15, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.newLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titleButton);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _edit_field_edit_field_component__WEBPACK_IMPORTED_MODULE_1__.EditFieldComponent],
  encapsulation: 2
});

/***/ }),

/***/ 9343:
/*!*****************************************************!*\
  !*** ./src/app/button-modal/button.modal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonModalModule": () => (/* binding */ ButtonModalModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1510);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 482);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ 9262);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 3910);
/* harmony import */ var _button_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.modal.component */ 1520);
/* harmony import */ var _edit_field_edit_field_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-field/edit.field.module */ 9244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);









class ButtonModalModule {
}
ButtonModalModule.ɵfac = function ButtonModalModule_Factory(t) { return new (t || ButtonModalModule)(); };
ButtonModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ButtonModalModule });
ButtonModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.ModalModule,
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__.AlertModule,
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__.ButtonsModule,
            _edit_field_edit_field_module__WEBPACK_IMPORTED_MODULE_1__.EditFieldModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ButtonModalModule, { declarations: [_button_modal_component__WEBPACK_IMPORTED_MODULE_0__.ButtonModalComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.ModalModule,
        ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__.AlertModule,
        ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_8__.ButtonsModule,
        _edit_field_edit_field_module__WEBPACK_IMPORTED_MODULE_1__.EditFieldModule], exports: [_button_modal_component__WEBPACK_IMPORTED_MODULE_0__.ButtonModalComponent] }); })();


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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.display.user */ 4453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.service */ 9318);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _reviews_reviews_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reviews/reviews.service */ 4948);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);








const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class CommentsComponent {
  constructor(commentsService, usersService, reviewsService) {
    var _this = this;

    this.commentsService = commentsService;
    this.usersService = usersService;
    this.reviewsService = reviewsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "user",
      title: "user",
      viewFn: entry => (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry || {})
    }, {
      name: "review",
      title: "review(title)",
      viewFn: review => {
        var _a, _b, _c, _d;

        return (review === null || review === void 0 ? void 0 : review.id) + ' => ' + ((_b = (_a = review === null || review === void 0 ? void 0 : review.groupTitle) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.group) + '/' + ((_d = (_c = review === null || review === void 0 ? void 0 : review.groupTitle) === null || _c === void 0 ? void 0 : _c.title) === null || _d === void 0 ? void 0 : _d.title);
      }
    }, {
      name: "comment",
      title: "user comment"
    }, {
      name: "draft",
      title: "draft"
    }, {
      name: "blocked",
      title: "ban"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "user",
      title: "user",
      type: 'select',
      formControlName: 'userId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.usersService.fetch('short-user-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
              };
            }));
          });
        });
      }
    }, {
      name: "review",
      title: "review(title)",
      type: 'select',
      formControlName: 'reviewId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.reviewsService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              var _a, _b, _c, _d;

              return {
                value: entry.id,
                title: 'id:' + (entry === null || entry === void 0 ? void 0 : entry.id) + '=>' + ((_b = (_a = entry === null || entry === void 0 ? void 0 : entry.groupTitle) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.group) + '/' + ((_d = (_c = entry === null || entry === void 0 ? void 0 : entry.groupTitle) === null || _c === void 0 ? void 0 : _c.title) === null || _d === void 0 ? void 0 : _d.title)
              };
            }));
          });
        });
      }
    }, {
      name: "comment",
      title: 'user comment',
      type: 'textarea',
      formControlName: 'comment'
    }, {
      name: "draft",
      title: 'is draft',
      type: 'checkbox',
      formControlName: 'draft'
    }, {
      name: "blocked",
      title: 'is ban',
      type: 'checkbox',
      formControlName: 'blocked'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.commentsService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.commentsService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.commentsService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.commentsService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.commentsService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.commentsService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.commentsService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

CommentsComponent.ɵfac = function CommentsComponent_Factory(t) {
  return new (t || CommentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_comments_service__WEBPACK_IMPORTED_MODULE_2__.CommentsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_4__.ReviewsService));
};

CommentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CommentsComponent,
  selectors: [["comments"]],
  viewQuery: function CommentsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function CommentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_5__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_6__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class CommentsModule {
}
CommentsModule.ɵfac = function CommentsModule_Factory(t) { return new (t || CommentsModule)(); };
CommentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CommentsModule });
CommentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _comments_service__WEBPACK_IMPORTED_MODULE_1__.CommentsService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CommentsModule, { declarations: [_comments_component__WEBPACK_IMPORTED_MODULE_0__.CommentsComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_comments_component__WEBPACK_IMPORTED_MODULE_0__.CommentsComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class CommentsService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
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
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(); };
CommentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac });


/***/ }),

/***/ 2762:
/*!****************************************************!*\
  !*** ./src/app/edit-field/edit.field.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFieldComponent": () => (/* binding */ EditFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);




function EditFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function EditFieldComponent_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.control);
} }
function EditFieldComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r3.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control);
} }
function EditFieldComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r4.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.control);
} }
function EditFieldComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r5.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.control);
} }
function EditFieldComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r6.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r6.control);
} }
function EditFieldComponent_div_1_span_6_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", entry_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r11.title);
} }
function EditFieldComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditFieldComponent_div_1_span_6_option_2_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r7.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r7.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.data);
} }
function EditFieldComponent_div_1_span_7_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", entry_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r13.title);
} }
function EditFieldComponent_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditFieldComponent_div_1_span_7_option_2_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r8.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r8.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.data);
} }
function EditFieldComponent_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditFieldComponent_div_1_span_8_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", !ctx_r9.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r9.control);
} }
function EditFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditFieldComponent_div_1_span_1_Template, 2, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditFieldComponent_div_1_span_2_Template, 2, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditFieldComponent_div_1_span_3_Template, 2, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditFieldComponent_div_1_span_4_Template, 2, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditFieldComponent_div_1_span_5_Template, 2, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditFieldComponent_div_1_span_6_Template, 3, 4, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditFieldComponent_div_1_span_7_Template, 3, 4, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditFieldComponent_div_1_span_8_Template, 2, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "select-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type === "file-upload");
} }
class EditFieldComponent {
    constructor() {
        this.fn = undefined;
        this.type = 'input';
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.valid = true;
        this.fieldLoading = false;
        this.isArrayData = false;
    }
    ngOnInit() {
        if (this.fn) {
            this.fieldLoading = true;
            this.fn().then((data) => {
                this.fieldLoading = false;
                this.isArrayData = Array.isArray(data);
                this.data = data;
            }).catch((e) => {
                console.error(e);
            });
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
EditFieldComponent.ɵfac = function EditFieldComponent_Factory(t) { return new (t || EditFieldComponent)(); };
EditFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditFieldComponent, selectors: [["edit-field"]], inputs: { fn: "fn", type: "type", control: "control", valid: "valid" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "row", "justify-content-center"], ["role", "status", 1, "col-auto", "spinner-border", 2, "width", "2.5rem", "height", "2.5rem"], ["type", "text", 1, "form-control", 3, "formControl"], ["type", "password", 1, "form-control", 3, "formControl"], ["rows", "5", 1, "form-control", 3, "formControl"], ["type", "checkbox", 1, "form-control", 3, "formControl"], ["multiple", "", 1, "form-control", 3, "formControl"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "form-control", 3, "formControl"], ["type", "file", "multiple", "", "accept", "image/*", 1, "form-control", 3, "formControl", "change"]], template: function EditFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditFieldComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditFieldComponent_div_1_Template, 9, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fieldLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fieldLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectMultipleControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor], encapsulation: 2 });


/***/ }),

/***/ 9244:
/*!*************************************************!*\
  !*** ./src/app/edit-field/edit.field.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditFieldModule": () => (/* binding */ EditFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _edit_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.field.component */ 2762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


//import {MatSelectModule} from '@angular/material/select';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


class EditFieldModule {
}
EditFieldModule.ɵfac = function EditFieldModule_Factory(t) { return new (t || EditFieldModule)(); };
EditFieldModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditFieldModule });
EditFieldModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditFieldModule, { declarations: [_edit_field_component__WEBPACK_IMPORTED_MODULE_0__.EditFieldComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule], exports: [_edit_field_component__WEBPACK_IMPORTED_MODULE_0__.EditFieldComponent] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups.service */ 2510);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);





const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class GroupsComponent {
  constructor(groupsService) {
    var _this = this;

    this.groupsService = groupsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "group",
      title: "group"
    }, {
      name: "description",
      title: "description"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "group",
      title: "Unique group name",
      type: 'input',
      formControlName: 'group'
    }, {
      name: "description",
      title: "Groupt description",
      type: 'textarea',
      formControlName: 'description'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.groupsService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.groupsService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.groupsService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.groupsService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.groupsService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.groupsService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.groupsService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

GroupsComponent.ɵfac = function GroupsComponent_Factory(t) {
  return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_groups_service__WEBPACK_IMPORTED_MODULE_1__.GroupsService));
};

GroupsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: GroupsComponent,
  selectors: [["groups"]],
  viewQuery: function GroupsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function GroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__.ViewTableComponent],
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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class GroupsModule {
}
GroupsModule.ɵfac = function GroupsModule_Factory(t) { return new (t || GroupsModule)(); };
GroupsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GroupsModule });
GroupsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _groups_service__WEBPACK_IMPORTED_MODULE_1__.GroupsService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GroupsModule, { declarations: [_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_groups_component__WEBPACK_IMPORTED_MODULE_0__.GroupsComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class GroupsService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
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
GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(); };
GroupsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GroupsService, factory: GroupsService.ɵfac });


/***/ }),

/***/ 4453:
/*!************************************************!*\
  !*** ./src/app/helpers/helper.display.user.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayUser": () => (/* binding */ displayUser)
/* harmony export */ });
function displayUser(entry) {
    let datas = [];
    if (entry === null || entry === void 0 ? void 0 : entry.user)
        datas.push(entry === null || entry === void 0 ? void 0 : entry.user);
    if (entry === null || entry === void 0 ? void 0 : entry.social_id)
        datas.push(entry === null || entry === void 0 ? void 0 : entry.social_id);
    return datas.join('/');
}


/***/ }),

/***/ 3854:
/*!**************************************!*\
  !*** ./src/app/helpers/paginator.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paginator": () => (/* binding */ Paginator)
/* harmony export */ });
class Paginator {
    constructor(defaultCountRows) {
        this.countRows = 0;
        this.currentPage = 1;
        this.lastAddCountRow = 0;
        this.countRows = defaultCountRows * 1;
    }
    replace(state, stateName, data) {
        state[stateName] = [...data];
        if (data.length >= this.countRows) {
            this.currentPage++; // only 1 page
            this.lastAddCountRow = 0;
        }
        else {
            this.lastAddCountRow = data.length;
        }
        return this;
    }
    remove(state, stateName, fn) {
        state[stateName] = state[stateName].filter((entry, index, array) => {
            const res = fn(entry, index, array);
            if (!res) {
                this.lastAddCountRow--;
                if (this.lastAddCountRow < 0) {
                    this.lastAddCountRow = this.countRows - 1;
                    this.currentPage--;
                    if (this.currentPage < 1)
                        this.currentPage = 1;
                }
            }
            return res;
        });
        return this;
    }
    append(state, stateName, data) {
        state[stateName] = [...data, ...state[stateName]];
        return this;
    }
    addWithReplace(state, stateName, data) {
        if (this.lastAddCountRow === 0) {
            state[stateName] = [...state[stateName], ...data];
        }
        else {
            const end = state[stateName].length - this.lastAddCountRow;
            state[stateName] = [...state[stateName].slice(0, end < 0 ? 0 : end), ...data];
        }
        if (data.length >= this.countRows) {
            this.currentPage++; // only 1 page
            this.lastAddCountRow = 0;
        }
        else {
            this.lastAddCountRow = data.length;
        }
        return this;
    }
    addToEnd(state, stateName, data) {
        state[stateName] = [...state[stateName], ...data];
        this.lastAddCountRow += data.length;
        if (this.lastAddCountRow >= this.countRows) {
            this.currentPage += Math.floor(this.lastAddCountRow / this.countRows);
            this.lastAddCountRow = this.lastAddCountRow % this.countRows;
        }
        return this;
    }
    getPageForQuery() {
        return this.currentPage;
    }
}


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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.display.user */ 4453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images.service */ 8129);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);







const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class ImagesComponent {
  constructor(imagesService, usersService) {
    var _this = this;

    this.imagesService = imagesService;
    this.usersService = usersService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "user",
      title: "user",
      viewFn: entry => (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry || {})
    }, {
      name: "url",
      title: "file url"
    }, {
      name: "vendor",
      title: "vendor"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "user",
      title: "user",
      type: 'select',
      formControlName: 'userId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.usersService.fetch('short-editor-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
              };
            }));
          });
        });
      }
    }];
    this.newFields = [{
      name: "user",
      title: "user",
      type: 'select',
      formControlName: 'userId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.usersService.fetch('short-editor-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
              };
            }));
          });
        });
      }
    }, {
      name: "url",
      title: 'images',
      type: 'file-upload',
      formControlName: 'images'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.imagesService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.imagesService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.imagesService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.imagesService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.imagesService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.imagesService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.imagesService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

ImagesComponent.ɵfac = function ImagesComponent_Factory(t) {
  return new (t || ImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_images_service__WEBPACK_IMPORTED_MODULE_2__.ImagesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService));
};

ImagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ImagesComponent,
  selectors: [["images"]],
  viewQuery: function ImagesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 12,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "isFormData", "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function ImagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isFormData", true)("newFields", ctx.newFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_4__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_5__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class ImagesModule {
}
ImagesModule.ɵfac = function ImagesModule_Factory(t) { return new (t || ImagesModule)(); };
ImagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ImagesModule });
ImagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _images_service__WEBPACK_IMPORTED_MODULE_1__.ImagesService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ImagesModule, { declarations: [_images_component__WEBPACK_IMPORTED_MODULE_0__.ImagesComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_images_component__WEBPACK_IMPORTED_MODULE_0__.ImagesComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class ImagesService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/images');
        this.addEntry('add', 'POST', '/admin/api/images/add');
        this.addEntry('edit', 'POST', '/admin/api/images/edit');
        this.addEntry('remove', 'POST', '/admin/api/images/remove');
        this.addEntry('restore', 'POST', '/admin/api/images/restore');
        this.addEntry('delete', 'POST', '/admin/api/images/delete');
    }
}
ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(); };
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _langs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./langs.service */ 2900);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);





const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class LangsComponent {
  constructor(langsService) {
    var _this = this;

    this.langsService = langsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "lang",
      title: "lang"
    }, {
      name: "title",
      title: "title"
    }, {
      name: "description",
      title: "description"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "lang",
      title: "Unique lang name",
      type: 'input',
      formControlName: 'lang'
    }, {
      name: "title",
      title: "display name",
      type: 'input',
      formControlName: 'title',
      editFn: o => {
        return o;
      },
      editReceiveFn: function () {
        var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {});

        return function editReceiveFn() {
          return _ref.apply(this, arguments);
        };
      }()
    }, {
      name: "description",
      title: "Lang description",
      type: 'textarea',
      formControlName: 'description'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.langsService.fetch('gets', o);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.langsService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.langsService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.langsService.fetch('add', o);
      });

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.langsService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.langsService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref8 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.langsService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

LangsComponent.ɵfac = function LangsComponent_Factory(t) {
  return new (t || LangsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_langs_service__WEBPACK_IMPORTED_MODULE_1__.LangsService));
};

LangsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LangsComponent,
  selectors: [["langs"]],
  viewQuery: function LangsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function LangsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__.ViewTableComponent],
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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class LangsModule {
}
LangsModule.ɵfac = function LangsModule_Factory(t) { return new (t || LangsModule)(); };
LangsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LangsModule });
LangsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _langs_service__WEBPACK_IMPORTED_MODULE_1__.LangsService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LangsModule, { declarations: [_langs_component__WEBPACK_IMPORTED_MODULE_0__.LangsComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_langs_component__WEBPACK_IMPORTED_MODULE_0__.LangsComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class LangsService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/langs');
        this.addEntry('add', 'POST', '/admin/api/langs/add');
        this.addEntry('edit', 'POST', '/admin/api/langs/edit');
        this.addEntry('remove', 'POST', '/admin/api/langs/remove');
        this.addEntry('restore', 'POST', '/admin/api/langs/restore');
        this.addEntry('delete', 'POST', '/admin/api/langs/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/langs-short');
    }
}
LangsService.ɵfac = function LangsService_Factory(t) { return new (t || LangsService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.display.user */ 4453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _likes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.service */ 3252);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _reviews_reviews_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reviews/reviews.service */ 4948);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);








const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class LikesComponent {
  constructor(likesService, usersService, reviewsService) {
    var _this = this;

    this.likesService = likesService;
    this.usersService = usersService;
    this.reviewsService = reviewsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "user",
      title: "user",
      viewFn: entry => (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry || {})
    }, {
      name: "review",
      title: "review(title)",
      viewFn: review => {
        var _a, _b, _c, _d;

        return (review === null || review === void 0 ? void 0 : review.id) + ' => ' + ((_b = (_a = review === null || review === void 0 ? void 0 : review.groupTitle) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.group) + '/' + ((_d = (_c = review === null || review === void 0 ? void 0 : review.groupTitle) === null || _c === void 0 ? void 0 : _c.title) === null || _d === void 0 ? void 0 : _d.title);
      }
    }, {
      name: "like",
      title: "user like"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "user",
      title: "user",
      type: 'select',
      formControlName: 'userId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.usersService.fetch('short-user-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
              };
            }));
          });
        });
      }
    }, {
      name: "review",
      title: "review(title)",
      type: 'select',
      formControlName: 'reviewId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.reviewsService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              var _a, _b, _c, _d;

              return {
                value: entry.id,
                title: 'id:' + (entry === null || entry === void 0 ? void 0 : entry.id) + '=>' + ((_b = (_a = entry === null || entry === void 0 ? void 0 : entry.groupTitle) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.group) + '/' + ((_d = (_c = entry === null || entry === void 0 ? void 0 : entry.groupTitle) === null || _c === void 0 ? void 0 : _c.title) === null || _d === void 0 ? void 0 : _d.title)
              };
            }));
          });
        });
      }
    }, {
      name: "like",
      title: 'like',
      type: 'checkbox',
      formControlName: 'like'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.likesService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.likesService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.likesService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.likesService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.likesService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.likesService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.likesService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

LikesComponent.ɵfac = function LikesComponent_Factory(t) {
  return new (t || LikesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_likes_service__WEBPACK_IMPORTED_MODULE_2__.LikesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_4__.ReviewsService));
};

LikesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: LikesComponent,
  selectors: [["likes"]],
  viewQuery: function LikesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function LikesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_5__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_6__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class LikesModule {
}
LikesModule.ɵfac = function LikesModule_Factory(t) { return new (t || LikesModule)(); };
LikesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LikesModule });
LikesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _likes_service__WEBPACK_IMPORTED_MODULE_1__.LikesService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LikesModule, { declarations: [_likes_component__WEBPACK_IMPORTED_MODULE_0__.LikesComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_likes_component__WEBPACK_IMPORTED_MODULE_0__.LikesComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class LikesService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/likes');
        this.addEntry('add', 'POST', '/admin/api/likes/add');
        this.addEntry('edit', 'POST', '/admin/api/likes/edit');
        this.addEntry('remove', 'POST', '/admin/api/likes/remove');
        this.addEntry('restore', 'POST', '/admin/api/likes/restore');
        this.addEntry('delete', 'POST', '/admin/api/likes/delete');
    }
}
LikesService.ɵfac = function LikesService_Factory(t) { return new (t || LikesService)(); };
LikesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LikesService, factory: LikesService.ɵfac });


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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.display.user */ 4453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ratings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ratings.service */ 3111);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _reviews_reviews_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reviews/reviews.service */ 4948);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);








const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class RatingsComponent {
  constructor(ratingsService, usersService, reviewsService) {
    var _this = this;

    this.ratingsService = ratingsService;
    this.usersService = usersService;
    this.reviewsService = reviewsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "user",
      title: "user",
      viewFn: entry => (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry || {})
    }, {
      name: "review",
      title: "review(title)",
      viewFn: review => {
        var _a, _b, _c, _d;

        return (review === null || review === void 0 ? void 0 : review.id) + ' => ' + ((_b = (_a = review === null || review === void 0 ? void 0 : review.groupTitle) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.group) + '/' + ((_d = (_c = review === null || review === void 0 ? void 0 : review.groupTitle) === null || _c === void 0 ? void 0 : _c.title) === null || _d === void 0 ? void 0 : _d.title);
      }
    }, {
      name: "userRating",
      title: "user rating"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "user",
      title: "user",
      type: 'select',
      formControlName: 'userId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.usersService.fetch('short-user-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
              };
            }));
          });
        });
      }
    }, {
      name: "review",
      title: "review(title)",
      type: 'select',
      formControlName: 'reviewId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.reviewsService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              var _a, _b, _c, _d;

              return {
                value: entry.id,
                title: 'id:' + (entry === null || entry === void 0 ? void 0 : entry.id) + '=>' + ((_b = (_a = entry === null || entry === void 0 ? void 0 : entry.groupTitle) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.group) + '/' + ((_d = (_c = entry === null || entry === void 0 ? void 0 : entry.groupTitle) === null || _c === void 0 ? void 0 : _c.title) === null || _d === void 0 ? void 0 : _d.title)
              };
            }));
          });
        });
      }
    }, {
      name: "userRating",
      title: 'rating',
      type: 'select',
      formControlName: 'rating',
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          res([1, 2, 3, 4, 5].map(item => {
            return {
              value: item,
              title: item
            };
          }));
        });
      }
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.ratingsService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.ratingsService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.ratingsService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.ratingsService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.ratingsService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.ratingsService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.ratingsService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

RatingsComponent.ɵfac = function RatingsComponent_Factory(t) {
  return new (t || RatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ratings_service__WEBPACK_IMPORTED_MODULE_2__.RatingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_4__.ReviewsService));
};

RatingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RatingsComponent,
  selectors: [["ratings"]],
  viewQuery: function RatingsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function RatingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_5__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_6__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class RatingsModule {
}
RatingsModule.ɵfac = function RatingsModule_Factory(t) { return new (t || RatingsModule)(); };
RatingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RatingsModule });
RatingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _ratings_service__WEBPACK_IMPORTED_MODULE_1__.RatingsService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RatingsModule, { declarations: [_ratings_component__WEBPACK_IMPORTED_MODULE_0__.RatingsComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_ratings_component__WEBPACK_IMPORTED_MODULE_0__.RatingsComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class RatingsService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/ratings');
        this.addEntry('add', 'POST', '/admin/api/ratings/add');
        this.addEntry('edit', 'POST', '/admin/api/ratings/edit');
        this.addEntry('remove', 'POST', '/admin/api/ratings/remove');
        this.addEntry('restore', 'POST', '/admin/api/ratings/restore');
        this.addEntry('delete', 'POST', '/admin/api/ratings/delete');
    }
}
RatingsService.ɵfac = function RatingsService_Factory(t) { return new (t || RatingsService)(); };
RatingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RatingsService, factory: RatingsService.ɵfac });


/***/ }),

/***/ 4859:
/*!************************************************************!*\
  !*** ./src/app/refresh-tokens/refresh.tokens.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefreshTokensComponent": () => (/* binding */ RefreshTokensComponent)
/* harmony export */ });
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.display.user */ 4453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _refresh_tokens_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refresh.tokens.service */ 281);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);





const _c0 = ["viewTable"];
class RefreshTokensComponent {
  constructor(refreshTokensService) {
    var _this = this;

    this.refreshTokensService = refreshTokensService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "user",
      title: "user",
      viewFn: entry => (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry || {})
    }, {
      name: "dateEndRT1",
      title: 'end time refresh token',
      viewFn: entry => new Date(entry).toString()
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.refreshTokensService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.refreshTokensService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.refreshTokensService.fetch('delete', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
  }

}

RefreshTokensComponent.ɵfac = function RefreshTokensComponent_Factory(t) {
  return new (t || RefreshTokensComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_refresh_tokens_service__WEBPACK_IMPORTED_MODULE_2__.RefreshTokensService));
};

RefreshTokensComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RefreshTokensComponent,
  selectors: [["refresh-tokens"]],
  viewQuery: function RefreshTokensComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
    }
  },
  decls: 2,
  vars: 6,
  consts: [[3, "isEdit", "isRemove", "fetchDelete", "fields", "fetch", "fetchMore"], ["viewTable", ""]],
  template: function RefreshTokensComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "view-table", 0, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isEdit", false)("isRemove", false)("fetchDelete", ctx.fetchDelete)("fields", ctx.fields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore);
    }
  },
  directives: [_view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__.ViewTableComponent],
  encapsulation: 2
});

/***/ }),

/***/ 6131:
/*!*********************************************************!*\
  !*** ./src/app/refresh-tokens/refresh.tokens.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefreshTokensModule": () => (/* binding */ RefreshTokensModule)
/* harmony export */ });
/* harmony import */ var _refresh_tokens_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refresh.tokens.component */ 4859);
/* harmony import */ var _refresh_tokens_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh.tokens.service */ 281);
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class RefreshTokensModule {
}
RefreshTokensModule.ɵfac = function RefreshTokensModule_Factory(t) { return new (t || RefreshTokensModule)(); };
RefreshTokensModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RefreshTokensModule });
RefreshTokensModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _refresh_tokens_service__WEBPACK_IMPORTED_MODULE_1__.RefreshTokensService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RefreshTokensModule, { declarations: [_refresh_tokens_component__WEBPACK_IMPORTED_MODULE_0__.RefreshTokensComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_refresh_tokens_component__WEBPACK_IMPORTED_MODULE_0__.RefreshTokensComponent] }); })();


/***/ }),

/***/ 281:
/*!**********************************************************!*\
  !*** ./src/app/refresh-tokens/refresh.tokens.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefreshTokensService": () => (/* binding */ RefreshTokensService)
/* harmony export */ });
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class RefreshTokensService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/refresh-tokens');
        this.addEntry('delete', 'POST', '/admin/api/refresh-tokens/delete');
    }
}
RefreshTokensService.ɵfac = function RefreshTokensService_Factory(t) { return new (t || RefreshTokensService)(); };
RefreshTokensService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RefreshTokensService, factory: RefreshTokensService.ɵfac });


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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _review_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review.tags.service */ 6425);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);




const _c0 = ["viewTable"];
class ReviewTagsComponent {
  constructor(reviewTagsService) {
    var _this = this;

    this.reviewTagsService = reviewTagsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "review",
      title: "group/title",
      viewFn: review => {
        var _a, _b, _c, _d;

        return (review === null || review === void 0 ? void 0 : review.id) + ' => ' + ((_b = (_a = review === null || review === void 0 ? void 0 : review.groupTitle) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.group) + '/' + ((_d = (_c = review === null || review === void 0 ? void 0 : review.groupTitle) === null || _c === void 0 ? void 0 : _c.title) === null || _d === void 0 ? void 0 : _d.title);
      }
    }, {
      name: "tag",
      title: "tag",
      viewFn: tag => `${tag === null || tag === void 0 ? void 0 : tag.id} => ${tag === null || tag === void 0 ? void 0 : tag.tag}`
    }, {
      name: "selected",
      title: "selected"
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewTagsService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewTagsService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
  }

}

ReviewTagsComponent.ɵfac = function ReviewTagsComponent_Factory(t) {
  return new (t || ReviewTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_review_tags_service__WEBPACK_IMPORTED_MODULE_1__.ReviewTagsService));
};

ReviewTagsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReviewTagsComponent,
  selectors: [["review-tags"]],
  viewQuery: function ReviewTagsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
    }
  },
  decls: 2,
  vars: 6,
  consts: [[3, "isEdit", "isRemove", "isDelete", "fields", "fetch", "fetchMore"], ["viewTable", ""]],
  template: function ReviewTagsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "view-table", 0, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isEdit", false)("isRemove", false)("isDelete", false)("fields", ctx.fields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore);
    }
  },
  directives: [_view_table_view_table_component__WEBPACK_IMPORTED_MODULE_2__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class ReviewTagsModule {
}
ReviewTagsModule.ɵfac = function ReviewTagsModule_Factory(t) { return new (t || ReviewTagsModule)(); };
ReviewTagsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ReviewTagsModule });
ReviewTagsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _review_tags_service__WEBPACK_IMPORTED_MODULE_1__.ReviewTagsService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReviewTagsModule, { declarations: [_review_tags_component__WEBPACK_IMPORTED_MODULE_0__.ReviewTagsComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_review_tags_component__WEBPACK_IMPORTED_MODULE_0__.ReviewTagsComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class ReviewTagsService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/review-tags');
    }
}
ReviewTagsService.ɵfac = function ReviewTagsService_Factory(t) { return new (t || ReviewTagsService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.display.user */ 4453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _reviews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.service */ 4948);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _groups_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../groups/groups.service */ 2510);
/* harmony import */ var _titles_titles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../titles/titles.service */ 7260);
/* harmony import */ var _tags_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tags/tags.service */ 8982);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);










const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class ReviewsComponent {
  constructor(reviewsService, usersService, groupsService, titlesService, tagsService) {
    var _this = this;

    this.reviewsService = reviewsService;
    this.usersService = usersService;
    this.groupsService = groupsService;
    this.titlesService = titlesService;
    this.tagsService = tagsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "groupTitle",
      title: "group/title",
      viewFn: data => data.group.group + '/' + data.title.title
    }, {
      name: "description",
      title: "description",
      viewFn: data => {
        return data.substring(0, 100);
      }
    }, {
      name: "authorRating",
      title: "AR"
    }, {
      name: "averageEditorRating",
      title: "AER"
    }, {
      name: "averageUserRating",
      title: "AUR"
    }, {
      name: "user",
      title: "user",
      viewFn: entry => (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry || {})
    }, {
      name: "draft",
      title: "draft"
    }, {
      name: "blocked",
      title: "ban"
    }, {
      name: "tags",
      title: "tags",
      viewFn: data => (data || []).map(item => item.tag).join(', ')
    }];
    this.editFields = [{
      name: "id",
      title: "id",
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "description",
      title: 'Description',
      type: 'textarea',
      formControlName: 'description'
    }, {
      name: "text",
      title: 'Full Text',
      type: 'textarea',
      formControlName: 'text'
    }, {
      name: "authorRating",
      title: 'Author Rating',
      type: 'select',
      formControlName: 'authorRating',
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          res([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
            return {
              value: item,
              title: item
            };
          }));
        });
      }
    }, {
      name: "user",
      title: 'author content',
      type: 'select',
      formControlName: 'userId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.usersService.fetch('short-editor-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
              };
            }));
          });
        });
      }
    }, {
      name: "groupTitle",
      title: 'group',
      type: 'select',
      formControlName: 'groupId',
      editFn: data => {
        return data.group.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.groupsService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: entry.group
              };
            }));
          });
        });
      }
    }, {
      name: "groupTitle",
      title: 'title',
      type: 'select',
      formControlName: 'titleId',
      editFn: data => {
        return data.title.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.titlesService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: entry.title
              };
            }));
          });
        });
      }
    }, {
      name: "draft",
      title: 'is draft',
      type: 'checkbox',
      formControlName: 'draft'
    }, {
      name: "blocked",
      title: 'is banned',
      type: 'checkbox',
      formControlName: 'blocked'
    }, {
      name: "tags",
      title: 'tags',
      type: 'select-multiple',
      formControlName: 'tags',
      editFn: data => {
        return data.map(item => item.id);
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.tagsService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: entry.tag
              };
            }));
          });
        });
      }
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewsService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewsService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEdit = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewsService.fetch('getFull', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewsService.fetch('edit', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewsService.fetch('add', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewsService.fetch('remove', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewsService.fetch('restore', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref8 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.reviewsService.fetch('delete', o);
      });

      return function (_x8) {
        return _ref8.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) {
  return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_reviews_service__WEBPACK_IMPORTED_MODULE_2__.ReviewsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_groups_groups_service__WEBPACK_IMPORTED_MODULE_4__.GroupsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_titles_titles_service__WEBPACK_IMPORTED_MODULE_5__.TitlesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_tags_tags_service__WEBPACK_IMPORTED_MODULE_6__.TagsService));
};

ReviewsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ReviewsComponent,
  selectors: [["reviews"]],
  viewQuery: function ReviewsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 12,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchEdit", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function ReviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchEdit", ctx.fetchEdit)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_7__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_8__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







class ReviewsModule {
}
ReviewsModule.ɵfac = function ReviewsModule_Factory(t) { return new (t || ReviewsModule)(); };
ReviewsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ReviewsModule });
ReviewsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _reviews_service__WEBPACK_IMPORTED_MODULE_1__.ReviewsService,
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReviewsModule, { declarations: [_reviews_component__WEBPACK_IMPORTED_MODULE_0__.ReviewsComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_reviews_component__WEBPACK_IMPORTED_MODULE_0__.ReviewsComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class ReviewsService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/reviews');
        this.addEntry('add', 'POST', '/admin/api/reviews/add');
        this.addEntry('edit', 'POST', '/admin/api/reviews/edit');
        this.addEntry('remove', 'POST', '/admin/api/reviews/remove');
        this.addEntry('restore', 'POST', '/admin/api/reviews/restore');
        this.addEntry('delete', 'POST', '/admin/api/reviews/delete');
        this.addEntry('getFull', 'GET', '/admin/api/review-full');
        this.addEntry('short-gets', 'GET', '/admin/api/reviews-short');
    }
}
ReviewsService.ɵfac = function ReviewsService_Factory(t) { return new (t || ReviewsService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.service */ 7776);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);





const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class RolesComponent {
  constructor(rolesService) {
    var _this = this;

    this.rolesService = rolesService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "role",
      title: "role"
    }, {
      name: "title",
      title: "title"
    }, {
      name: "description",
      title: "description"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "role",
      title: "UID role",
      type: 'input',
      formControlName: 'role'
    }, {
      name: "title",
      title: "Title role",
      type: 'input',
      formControlName: 'title',
      editFn: o => {
        return o;
      },
      editReceiveFn: function () {
        var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {});

        return function editReceiveFn() {
          return _ref.apply(this, arguments);
        };
      }()
    }, {
      name: "description",
      title: "Role description",
      type: 'textarea',
      formControlName: 'description'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.rolesService.fetch('gets', o);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.rolesService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.rolesService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.rolesService.fetch('add', o);
      });

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.rolesService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.rolesService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref8 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.rolesService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

RolesComponent.ɵfac = function RolesComponent_Factory(t) {
  return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_roles_service__WEBPACK_IMPORTED_MODULE_1__.RolesService));
};

RolesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RolesComponent,
  selectors: [["roles"]],
  viewQuery: function RolesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function RolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class RolesModule {
}
RolesModule.ɵfac = function RolesModule_Factory(t) { return new (t || RolesModule)(); };
RolesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RolesModule });
RolesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _roles_service__WEBPACK_IMPORTED_MODULE_1__.RolesService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RolesModule, { declarations: [_roles_component__WEBPACK_IMPORTED_MODULE_0__.RolesComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_roles_component__WEBPACK_IMPORTED_MODULE_0__.RolesComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class RolesService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/roles');
        this.addEntry('short-gets', 'GET', '/admin/api/roles-short');
        this.addEntry('add', 'POST', '/admin/api/roles/add');
        this.addEntry('edit', 'POST', '/admin/api/roles/edit');
        this.addEntry('remove', 'POST', '/admin/api/roles/remove');
        this.addEntry('restore', 'POST', '/admin/api/roles/restore');
        this.addEntry('delete', 'POST', '/admin/api/roles/delete');
    }
}
RolesService.ɵfac = function RolesService_Factory(t) { return new (t || RolesService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.service */ 8982);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);





const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class TagsComponent {
  constructor(tagsService) {
    var _this = this;

    this.tagsService = tagsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "tag",
      title: "tag"
    }, {
      name: "countReview",
      title: "range"
    }];
    this.editFields = [{
      name: "id",
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "tag",
      title: 'Unique tag name',
      type: 'input',
      formControlName: 'tag'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.tagsService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.tagsService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.tagsService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.tagsService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.tagsService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.tagsService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.tagsService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

TagsComponent.ɵfac = function TagsComponent_Factory(t) {
  return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_tags_service__WEBPACK_IMPORTED_MODULE_1__.TagsService));
};

TagsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TagsComponent,
  selectors: [["tags"]],
  viewQuery: function TagsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function TagsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags.service */ 8982);
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class TagsModule {
}
TagsModule.ɵfac = function TagsModule_Factory(t) { return new (t || TagsModule)(); };
TagsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TagsModule });
TagsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _tags_service__WEBPACK_IMPORTED_MODULE_1__.TagsService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TagsModule, { declarations: [_tags_component__WEBPACK_IMPORTED_MODULE_0__.TagsComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_tags_component__WEBPACK_IMPORTED_MODULE_0__.TagsComponent] }); })();


/***/ }),

/***/ 8982:
/*!**************************************!*\
  !*** ./src/app/tags/tags.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsService": () => (/* binding */ TagsService)
/* harmony export */ });
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class TagsService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/tags');
        this.addEntry('add', 'POST', '/admin/api/tags/add');
        this.addEntry('edit', 'POST', '/admin/api/tags/edit');
        this.addEntry('remove', 'POST', '/admin/api/tags/remove');
        this.addEntry('restore', 'POST', '/admin/api/tags/restore');
        this.addEntry('delete', 'POST', '/admin/api/tags/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/tags-short');
    }
}
TagsService.ɵfac = function TagsService_Factory(t) { return new (t || TagsService)(); };
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _themes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes.service */ 3150);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);





const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class ThemesComponent {
  constructor(themesService) {
    var _this = this;

    this.themesService = themesService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "theme",
      title: "theme"
    }, {
      name: "title",
      title: "title"
    }, {
      name: "description",
      title: "description"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "theme",
      title: "Unique theme name",
      type: 'input',
      formControlName: 'theme'
    }, {
      name: "title",
      title: "display name",
      type: 'input',
      formControlName: 'title',
      editFn: o => {
        return o;
      },
      editReceiveFn: function () {
        var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {});

        return function editReceiveFn() {
          return _ref.apply(this, arguments);
        };
      }()
    }, {
      name: "description",
      title: "Theme description",
      type: 'textarea',
      formControlName: 'description'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.themesService.fetch('gets', o);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.themesService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.themesService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.themesService.fetch('add', o);
      });

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.themesService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.themesService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref8 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.themesService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

ThemesComponent.ɵfac = function ThemesComponent_Factory(t) {
  return new (t || ThemesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_themes_service__WEBPACK_IMPORTED_MODULE_1__.ThemesService));
};

ThemesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ThemesComponent,
  selectors: [["themes"]],
  viewQuery: function ThemesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function ThemesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__.ViewTableComponent],
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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class ThemesModule {
}
ThemesModule.ɵfac = function ThemesModule_Factory(t) { return new (t || ThemesModule)(); };
ThemesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ThemesModule });
ThemesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _themes_service__WEBPACK_IMPORTED_MODULE_1__.ThemesService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ThemesModule, { declarations: [_themes_component__WEBPACK_IMPORTED_MODULE_0__.ThemesComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_themes_component__WEBPACK_IMPORTED_MODULE_0__.ThemesComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class ThemesService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/themes');
        this.addEntry('add', 'POST', '/admin/api/themes/add');
        this.addEntry('edit', 'POST', '/admin/api/themes/edit');
        this.addEntry('remove', 'POST', '/admin/api/themes/remove');
        this.addEntry('restore', 'POST', '/admin/api/themes/restore');
        this.addEntry('delete', 'POST', '/admin/api/themes/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/themes-short');
    }
}
ThemesService.ɵfac = function ThemesService_Factory(t) { return new (t || ThemesService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _title_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.groups.service */ 5799);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);




const _c0 = ["viewTable"];
class TitleGroupsComponent {
  constructor(titleGroupsService) {
    var _this = this;

    this.titleGroupsService = titleGroupsService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "title",
      title: "titleId",
      viewFn: title => `${title.id} => ${title.title}`
    }, {
      name: "group",
      title: "groupId",
      viewFn: group => `${group.id} => ${group.group}`
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titleGroupsService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titleGroupsService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
  }

}

TitleGroupsComponent.ɵfac = function TitleGroupsComponent_Factory(t) {
  return new (t || TitleGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_title_groups_service__WEBPACK_IMPORTED_MODULE_1__.TitleGroupsService));
};

TitleGroupsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TitleGroupsComponent,
  selectors: [["title-groups"]],
  viewQuery: function TitleGroupsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
    }
  },
  decls: 2,
  vars: 6,
  consts: [[3, "isEdit", "isRemove", "isDelete", "fields", "fetch", "fetchMore"], ["viewTable", ""]],
  template: function TitleGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "view-table", 0, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isEdit", false)("isRemove", false)("isDelete", false)("fields", ctx.fields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore);
    }
  },
  directives: [_view_table_view_table_component__WEBPACK_IMPORTED_MODULE_2__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class TitleGroupsModule {
}
TitleGroupsModule.ɵfac = function TitleGroupsModule_Factory(t) { return new (t || TitleGroupsModule)(); };
TitleGroupsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TitleGroupsModule });
TitleGroupsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _title_groups_service__WEBPACK_IMPORTED_MODULE_1__.TitleGroupsService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TitleGroupsModule, { declarations: [_title_groups_component__WEBPACK_IMPORTED_MODULE_0__.TitleGroupsComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_title_groups_component__WEBPACK_IMPORTED_MODULE_0__.TitleGroupsComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class TitleGroupsService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/title-groups');
    }
}
TitleGroupsService.ɵfac = function TitleGroupsService_Factory(t) { return new (t || TitleGroupsService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _titles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titles.service */ 7260);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);





const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class TitlesComponent {
  constructor(titlesService) {
    var _this = this;

    this.titlesService = titlesService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "title",
      title: "title"
    }, {
      name: "description",
      title: "description"
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "title",
      title: "Unique title name",
      type: 'input',
      formControlName: 'title'
    }, {
      name: "description",
      title: "Theme description",
      type: 'textarea',
      formControlName: 'description'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titlesService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titlesService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titlesService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titlesService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titlesService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titlesService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.titlesService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

TitlesComponent.ɵfac = function TitlesComponent_Factory(t) {
  return new (t || TitlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_titles_service__WEBPACK_IMPORTED_MODULE_1__.TitlesService));
};

TitlesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TitlesComponent,
  selectors: [["titles"]],
  viewQuery: function TitlesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function TitlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("newFields", ctx.editFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_2__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class TitlesModule {
}
TitlesModule.ɵfac = function TitlesModule_Factory(t) { return new (t || TitlesModule)(); };
TitlesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TitlesModule });
TitlesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _titles_service__WEBPACK_IMPORTED_MODULE_1__.TitlesService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TitlesModule, { declarations: [_titles_component__WEBPACK_IMPORTED_MODULE_0__.TitlesComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_titles_component__WEBPACK_IMPORTED_MODULE_0__.TitlesComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class TitlesService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/titles');
        this.addEntry('add', 'POST', '/admin/api/titles/add');
        this.addEntry('edit', 'POST', '/admin/api/titles/edit');
        this.addEntry('remove', 'POST', '/admin/api/titles/remove');
        this.addEntry('restore', 'POST', '/admin/api/titles/restore');
        this.addEntry('delete', 'POST', '/admin/api/titles/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/titles-short');
    }
}
TitlesService.ɵfac = function TitlesService_Factory(t) { return new (t || TitlesService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.display.user */ 4453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _user_infos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-infos.service */ 6643);
/* harmony import */ var _themes_themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/themes.service */ 3150);
/* harmony import */ var _langs_langs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../langs/langs.service */ 2900);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/users.service */ 9850);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);









const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
class UserInfosComponent {
  constructor(userInfosService, themesService, langsService, usersService) {
    var _this = this;

    this.userInfosService = userInfosService;
    this.themesService = themesService;
    this.langsService = langsService;
    this.usersService = usersService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "user",
      title: "user",
      viewFn: entry => (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
    }, {
      name: "first_name",
      title: "name"
    }, {
      name: "last_name",
      title: "family"
    }, {
      name: "lang",
      title: "lang",
      viewFn: data => `${data.lang} => ${data.title}`
    }, {
      name: "theme",
      title: "theme",
      viewFn: data => `${data.theme} => ${data.title}`
    }];
    this.editFields = [{
      name: 'id',
      title: 'id',
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "user",
      title: "user id",
      type: 'select',
      formControlName: 'userId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.usersService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
              };
            }));
          });
        });
      }
    }, {
      name: "first_name",
      title: "first name",
      type: 'input',
      formControlName: 'first_name'
    }, {
      name: "last_name",
      title: "last name",
      type: 'input',
      formControlName: 'last_name'
    }, {
      name: "lang",
      title: "lang user",
      type: 'select',
      formControlName: 'lang',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.langsService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: entry.title
              };
            }));
          });
        });
      }
    }, {
      name: "theme",
      title: "theme user",
      type: 'select',
      formControlName: 'theme',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.themesService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: entry.title
              };
            }));
          });
        });
      }
    }];
    this.newFields = [{
      name: "user",
      title: "user id",
      type: 'select',
      formControlName: 'userId',
      editFn: data => {
        return data.id;
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.usersService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: (0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(entry)
              };
            }));
          });
        });
      }
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userInfosService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userInfosService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userInfosService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userInfosService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userInfosService.fetch('remove', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userInfosService.fetch('restore', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userInfosService.fetch('delete', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
  }

}

UserInfosComponent.ɵfac = function UserInfosComponent_Factory(t) {
  return new (t || UserInfosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_user_infos_service__WEBPACK_IMPORTED_MODULE_2__.UserInfosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_themes_themes_service__WEBPACK_IMPORTED_MODULE_3__.ThemesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_langs_langs_service__WEBPACK_IMPORTED_MODULE_4__.LangsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService));
};

UserInfosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: UserInfosComponent,
  selectors: [["user-infos"]],
  viewQuery: function UserInfosComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    }
  },
  decls: 5,
  vars: 11,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "newFields", "fetchNewSave", "added"], ["modalButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function UserInfosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "view-table", 3, 4);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("newFields", ctx.newFields)("fetchNewSave", ctx.fetchNewSave)("added", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_6__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_7__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







class UserInfosModule {
}
UserInfosModule.ɵfac = function UserInfosModule_Factory(t) { return new (t || UserInfosModule)(); };
UserInfosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserInfosModule });
UserInfosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _user_infos_service__WEBPACK_IMPORTED_MODULE_1__.UserInfosService,
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserInfosModule, { declarations: [_user_infos_component__WEBPACK_IMPORTED_MODULE_0__.UserInfosComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_user_infos_component__WEBPACK_IMPORTED_MODULE_0__.UserInfosComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class UserInfosService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/user-infos');
        this.addEntry('add', 'POST', '/admin/api/user-info/add');
        this.addEntry('edit', 'POST', '/admin/api/user-info/edit');
        this.addEntry('remove', 'POST', '/admin/api/user-info/remove');
        this.addEntry('restore', 'POST', '/admin/api/user-info/restore');
        this.addEntry('delete', 'POST', '/admin/api/user-info/delete');
    }
}
UserInfosService.ɵfac = function UserInfosService_Factory(t) { return new (t || UserInfosService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helper.display.user */ 4453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.roles.service */ 2999);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);





const _c0 = ["viewTable"];
class UserRolesComponent {
  constructor(userRolesService) {
    var _this = this;

    this.userRolesService = userRolesService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "user",
      title: "userId",
      viewFn: user => `${user === null || user === void 0 ? void 0 : user.id} => ${(0,_helpers_helper_display_user__WEBPACK_IMPORTED_MODULE_1__.displayUser)(user || {})}`
    }, {
      name: "role",
      title: "roleId",
      viewFn: role => `${role.id} => ${role.role}:${role.title}`
    }, {
      name: "selected",
      title: "selected"
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userRolesService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.userRolesService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
  }

}

UserRolesComponent.ɵfac = function UserRolesComponent_Factory(t) {
  return new (t || UserRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_user_roles_service__WEBPACK_IMPORTED_MODULE_2__.UserRolesService));
};

UserRolesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UserRolesComponent,
  selectors: [["user-roles"]],
  viewQuery: function UserRolesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
    }
  },
  decls: 2,
  vars: 6,
  consts: [[3, "isEdit", "isRemove", "isDelete", "fields", "fetch", "fetchMore"], ["viewTable", ""]],
  template: function UserRolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "view-table", 0, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isEdit", false)("isRemove", false)("isDelete", false)("fields", ctx.fields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore);
    }
  },
  directives: [_view_table_view_table_component__WEBPACK_IMPORTED_MODULE_3__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);





class UserRolesModule {
}
UserRolesModule.ɵfac = function UserRolesModule_Factory(t) { return new (t || UserRolesModule)(); };
UserRolesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserRolesModule });
UserRolesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _user_roles_service__WEBPACK_IMPORTED_MODULE_1__.UserRolesService,
    ], imports: [[
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserRolesModule, { declarations: [_user_roles_component__WEBPACK_IMPORTED_MODULE_0__.UserRolesComponent], imports: [_view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_user_roles_component__WEBPACK_IMPORTED_MODULE_0__.UserRolesComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class UserRolesService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/user-roles');
    }
}
UserRolesService.ɵfac = function UserRolesService_Factory(t) { return new (t || UserRolesService)(); };
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
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 9850);
/* harmony import */ var _roles_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../roles/roles.service */ 7776);
/* harmony import */ var _button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.component */ 1520);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-table/view.table.component */ 7561);






const _c0 = ["viewTable"];
const _c1 = ["modalButton"];
const _c2 = ["modalSocialButton"];
class UsersComponent {
  constructor(usersService, rolesService) {
    var _this = this;

    this.usersService = usersService;
    this.rolesService = rolesService;
    this.fields = [{
      name: "id",
      title: "id"
    }, {
      name: "user",
      title: "user"
    }, {
      name: "social_id",
      title: "sid"
    }, {
      name: "email",
      title: "email"
    }, {
      name: "blocked",
      title: "ban"
    }, {
      name: "activated",
      title: "ver"
    }, {
      name: "countUserLike",
      title: "likes"
    }, {
      name: "roles",
      title: "roles",
      viewFn: data => {
        return data.filter(item => item.UserRoles.selected).map(item => item.title).join(', ');
      }
    }];
    this.editFields = [{
      name: "id",
      title: "id",
      type: 'hidden',
      formControlName: 'id',
      required: true
    }, {
      name: "user",
      title: 'Unique user name',
      type: 'input',
      formControlName: 'user'
    }, {
      name: "social_id",
      title: 'Social ID+vendor',
      type: 'input',
      formControlName: 'social_id'
    }, {
      name: "email",
      title: 'user email',
      type: 'input',
      formControlName: 'email'
    }, {
      name: "blocked",
      title: 'The user is blocked?',
      type: 'checkbox',
      formControlName: 'blocked'
    }, {
      name: "activated",
      title: 'The user is verification?',
      type: 'checkbox',
      formControlName: 'activated'
    }, {
      name: "roles",
      title: 'roles(multiple!!!)',
      type: 'select-multiple',
      formControlName: 'roles',
      editFn: data => {
        return data.filter(item => item.UserRoles.selected).map(item => item.id);
      },
      editReceiveFn: () => {
        return new Promise((res, rej) => {
          this.rolesService.fetch('short-gets', {}).then(data => {
            res(data.map(entry => {
              return {
                value: entry.id,
                title: entry.title
              };
            }));
          });
        });
      }
    }];
    this.newFields = [{
      name: "user",
      title: 'Unique user name',
      type: 'input',
      formControlName: 'user'
    }, {
      name: "password",
      title: 'User password',
      type: 'password',
      formControlName: 'password'
    }, {
      name: "email",
      title: 'Unique user email',
      type: 'input',
      formControlName: 'email'
    }, {
      name: "first_name",
      title: 'User First name',
      type: 'input',
      formControlName: 'first_name'
    }, {
      name: "last_name",
      title: 'User Last name',
      type: 'input',
      formControlName: 'last_name'
    }];
    this.newSocialFields = [{
      name: "social_id",
      title: 'User social ID',
      type: 'input',
      formControlName: 'social_id'
    }, {
      name: "vendor",
      title: 'Vendor social ID',
      type: 'input',
      formControlName: 'vendor'
    }, {
      name: "soft_create",
      title: 'Soft User create(Not ReWrite)',
      type: 'checkbox',
      formControlName: 'soft_create'
    }, {
      name: "displayName",
      title: 'User Full name',
      type: 'input',
      formControlName: 'displayName'
    }];

    this.fetch = /*#__PURE__*/function () {
      var _ref = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.usersService.fetch('gets', o);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.fetchMore = /*#__PURE__*/function () {
      var _ref2 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.usersService.fetch('gets', o);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.fetchEditSave = /*#__PURE__*/function () {
      var _ref3 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.usersService.fetch('edit', o);
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.fetchNewSave = /*#__PURE__*/function () {
      var _ref4 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.usersService.fetch('add', o);
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.fetchNewSocialSave = /*#__PURE__*/function () {
      var _ref5 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.usersService.fetch('add-social', o);
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();

    this.fetchRemove = /*#__PURE__*/function () {
      var _ref6 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.usersService.fetch('remove', o);
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }();

    this.fetchRestore = /*#__PURE__*/function () {
      var _ref7 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.usersService.fetch('restore', o);
      });

      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }();

    this.fetchDelete = /*#__PURE__*/function () {
      var _ref8 = (0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o) {
        yield _this.usersService.fetch('delete', o);
      });

      return function (_x8) {
        return _ref8.apply(this, arguments);
      };
    }();
  }

  ngAfterViewInit() {
    this.viewTable.refreshSettings();
    this.modalButton.refreshSettings();
    this.modalSocialButton.refreshSettings();
  }

}

UsersComponent.ɵfac = function UsersComponent_Factory(t) {
  return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_roles_roles_service__WEBPACK_IMPORTED_MODULE_2__.RolesService));
};

UsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UsersComponent,
  selectors: [["users"]],
  viewQuery: function UsersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modalSocialButton = _t.first);
    }
  },
  decls: 8,
  vars: 16,
  consts: [[1, "container-fluid", "row", "justify-content-end", "mt-2", "mb-2"], [3, "titleButton", "newFields", "fetchNewSave", "added"], ["modalButton", ""], [1, "mr-2", "ml-2"], ["modalSocialButton", ""], [3, "fields", "editFields", "fetch", "fetchMore", "fetchEditSave", "fetchRemove", "fetchRestore", "fetchDelete"], ["viewTable", ""]],
  template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "button-modal", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "button-modal", 1, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "view-table", 5, 6);
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("titleButton", "Create Classic")("newFields", ctx.newFields)("fetchNewSave", ctx.fetchNewSave)("added", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("titleButton", "Create Social")("newFields", ctx.newSocialFields)("fetchNewSave", ctx.fetchNewSocialSave)("added", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fields", ctx.fields)("editFields", ctx.editFields)("fetch", ctx.fetch)("fetchMore", ctx.fetchMore)("fetchEditSave", ctx.fetchEditSave)("fetchRemove", ctx.fetchRemove)("fetchRestore", ctx.fetchRestore)("fetchDelete", ctx.fetchDelete);
    }
  },
  directives: [_button_modal_button_modal_component__WEBPACK_IMPORTED_MODULE_3__.ButtonModalComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_4__.ViewTableComponent],
  encapsulation: 2
});

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ 718);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 9850);
/* harmony import */ var _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-table/view.table.module */ 7628);
/* harmony import */ var _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-modal/button.modal.module */ 9343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
            _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _view_table_view_table_module__WEBPACK_IMPORTED_MODULE_2__.ViewTableModule,
        _button_modal_button_modal_module__WEBPACK_IMPORTED_MODULE_3__.ButtonModalModule], exports: [_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent] }); })();


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
/* harmony import */ var _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract.request.service */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class UsersService extends _abstract_request_service__WEBPACK_IMPORTED_MODULE_0__.AbstractRequestService {
    constructor() {
        super();
        this.addEntry('gets', 'GET', '/admin/api/users');
        this.addEntry('add-social', 'POST', '/admin/api/users/add-social');
        this.addEntry('add', 'POST', '/admin/api/users/add');
        this.addEntry('edit', 'POST', '/admin/api/users/edit');
        this.addEntry('remove', 'POST', '/admin/api/users/remove');
        this.addEntry('restore', 'POST', '/admin/api/users/restore');
        this.addEntry('delete', 'POST', '/admin/api/users/delete');
        this.addEntry('short-gets', 'GET', '/admin/api/users-short');
        this.addEntry('short-editor-gets', 'GET', '/admin/api/users-editor-short');
        this.addEntry('short-user-gets', 'GET', '/admin/api/users-user-short');
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });


/***/ }),

/***/ 7561:
/*!****************************************************!*\
  !*** ./src/app/view-table/view.table.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTableComponent": () => (/* binding */ ViewTableComponent)
/* harmony export */ });
/* harmony import */ var _home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 9770);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _helpers_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/paginator */ 3854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 482);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ 9262);
/* harmony import */ var _edit_field_edit_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-field/edit.field.component */ 2762);










function ViewTableComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const field_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](field_r8.title);
  }
}

function ViewTableComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "First Data Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", ctx_r1.fields.length + 1 + 3 - 2);
  }
}

function ViewTableComponent_ng_container_11_tr_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const field_r17 = ctx.$implicit;
    const entry_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](field_r17.viewFn ? field_r17.viewFn(entry_r9[field_r17.name]) : entry_r9[field_r17.name]);
  }
}

function ViewTableComponent_ng_container_11_tr_1_ng_container_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_container_11_tr_1_ng_container_6_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      const entry_r9 = ctx_r22.$implicit;
      const i_r10 = ctx_r22.index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);

      return ctx_r20.onEdit($event, _r4, entry_r9, i_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ViewTableComponent_ng_container_11_tr_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ViewTableComponent_ng_container_11_tr_1_ng_container_6_button_1_Template, 3, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const entry_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !entry_r9.deletedAt);
  }
}

function ViewTableComponent_ng_container_11_tr_1_ng_container_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_container_11_tr_1_ng_container_8_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      const entry_r9 = ctx_r27.$implicit;
      const i_r10 = ctx_r27.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r26.onRemove($event, entry_r9, i_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ViewTableComponent_ng_container_11_tr_1_ng_container_8_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_container_11_tr_1_ng_container_8_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      const entry_r9 = ctx_r30.$implicit;
      const i_r10 = ctx_r30.index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r29.onRestore($event, entry_r9, i_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ViewTableComponent_ng_container_11_tr_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ViewTableComponent_ng_container_11_tr_1_ng_container_8_button_1_Template, 3, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ViewTableComponent_ng_container_11_tr_1_ng_container_8_button_2_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const entry_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !entry_r9.deletedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", entry_r9.deletedAt);
  }
}

function ViewTableComponent_ng_container_11_tr_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_container_11_tr_1_ng_container_10_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      const entry_r9 = ctx_r35.$implicit;
      const i_r10 = ctx_r35.index;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);

      return ctx_r33.onDelete($event, _r6, entry_r9, i_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}

function ViewTableComponent_ng_container_11_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ViewTableComponent_ng_container_11_tr_1_ng_container_4_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ViewTableComponent_ng_container_11_tr_1_ng_container_6_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ViewTableComponent_ng_container_11_tr_1_ng_container_8_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ViewTableComponent_ng_container_11_tr_1_ng_container_10_Template, 4, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.isEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.isRemove);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.isDelete);
  }
}

function ViewTableComponent_ng_container_11_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", ctx_r12.fields.length + 1 + 3 - 2);
  }
}

function ViewTableComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ViewTableComponent_ng_container_11_tr_1_Template, 11, 5, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ViewTableComponent_ng_container_11_tr_2_Template, 9, 1, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.rowsLoading.includes(entry_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.rowsLoading.includes(entry_r9.id));
  }
}

function ViewTableComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 21);
  }
}

function ViewTableComponent_ng_template_18_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "danger")("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r38.editError);
  }
}

function ViewTableComponent_ng_template_18_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}

function ViewTableComponent_ng_template_18_ng_container_9_ng_container_3_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This field must be filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ViewTableComponent_ng_template_18_ng_container_9_ng_container_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ViewTableComponent_ng_template_18_ng_container_9_ng_container_3_div_7_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const editField_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r44.errors[editField_r42.formControlName].required);
  }
}

function ViewTableComponent_ng_template_18_ng_container_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "edit-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ViewTableComponent_ng_template_18_ng_container_9_ng_container_3_div_7_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const editField_r42 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("view-table-hidden-field", editField_r42.type === "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](editField_r42.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", "75%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", editField_r42.type)("fn", editField_r42.editReceiveFn)("valid", !ctx_r41.errors[editField_r42.formControlName])("control", ctx_r41.editModalForm.get(editField_r42.formControlName));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r41.errors[editField_r42.formControlName]);
  }
}

function ViewTableComponent_ng_template_18_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ViewTableComponent_ng_template_18_ng_container_9_ng_container_3_Template, 8, 12, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r40.editModalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r40.editFields);
  }
}

function ViewTableComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Modal Edit Entry");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_template_18_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r47.modalEditRef == null ? null : ctx_r47.modalEditRef.hide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ViewTableComponent_ng_template_18_ng_container_7_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ViewTableComponent_ng_template_18_ng_container_8_Template, 5, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ViewTableComponent_ng_template_18_ng_container_9_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_template_18_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r49.modalEditRef == null ? null : ctx_r49.modalEditRef.hide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_template_18_Template_button_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r50.onModalEdit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.editError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.editLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.editLoading);
  }
}

function ViewTableComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Confirm You Delete action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_template_20_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r52.modalDeleteRef == null ? null : ctx_r52.modalDeleteRef.hide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_template_20_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r54.modalDeleteRef == null ? null : ctx_r54.modalDeleteRef.hide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_ng_template_20_Template_button_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r55.onModalDelete($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Do you really want to delete (permanently) the current row with id ", ctx_r7.deletedId, "?");
  }
}

class ViewTableComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.paginator = new _helpers_paginator__WEBPACK_IMPORTED_MODULE_1__.Paginator(20);
    this.isFormData = false;
    this.fields = [];
    this.editFields = [];
    this.fetch = /*#__PURE__*/(0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw new Error('Callback Fetch is NOT DEFINED');
    });
    this.fetchMore = /*#__PURE__*/(0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw new Error('Callback Fetch more is NOT DEFINED');
    });
    this.isEdit = true;
    this.isRemove = true;
    this.isDelete = true;
    this.editModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
    this.rowsLoading = [];
    this.data = [];
    this.dataLoading = false;
    this.errors = {};
    this.subscribers = [];
    this.fetchEditSave = /*#__PURE__*/(0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw new Error('Callback Fetch Edit Save is NOT DEFINED');
    });
    this.editError = false;
    this.editLoading = false;
    this.fetchRemove = /*#__PURE__*/(0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw new Error('Callback Fetch Remove is NOT DEFINED');
    });
    this.fetchRestore = /*#__PURE__*/(0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw new Error('Callback Fetch Restore is NOT DEFINED');
    });
    this.deletedId = 0;
    this.fetchDelete = /*#__PURE__*/(0,_home_chechaandrey_Projects_itransition_course_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw new Error('Callback Fetch Delete is NOT DEFINED');
    });
    this.moreLoading = false;
  }

  ngOnInit() {
    this.fetch({
      successFn: result => {
        this.paginator.replace(this, 'data', result);
        /*this.data = result;*/
      },
      errorLoadFn: e => {
        console.error(e);
      },
      startLoadFn: () => {
        this.dataLoading = true;
      },
      endLoadFn: () => {
        this.dataLoading = false;
      }
    });
  }

  ngOnDestroy() {
    this.removeSubscribers();
    if (this.modalEditLink) this.modalEditLink.unsubscribe();
  }

  removeSubscribers() {
    this.subscribers.map(o => {
      o.unsubscribe();
    });
    this.subscribers = [];
  }

  refreshSettings() {
    this.removeSubscribers();
    const o = this.editFields.reduce((acc, editField) => {
      let opts = [];
      let formControl;
      if (editField.required) opts.push(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);

      if (editField.type === 'select-multiple' || editField.type === 'file-upload') {
        formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl([], opts);
      } else if (editField.type === 'checkbox') {
        formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false, opts);
      } else {
        formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', opts);
      }

      acc[editField.formControlName] = formControl;
      this.subscribers.push(formControl.statusChanges.subscribe(status => {
        this.errors[editField.formControlName] = status === 'VALID' ? null : formControl.errors;
      }));
      return acc;
    }, {});
    this.editModalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup(o);
  }

  getDataWithEditFn(data) {
    return this.editFields.reduce((acc, entry) => {
      acc[entry.formControlName] = entry.editFn ? entry.editFn(data[entry.name]) : data[entry.name];
      return acc;
    }, {});
  }

  setFormValue(data) {
    let fields = this.editModalForm.controls;
    Object.keys(data).map(key => {
      if (fields[key]) fields[key].setValue(data[key]);
    });
  }

  getFormData() {
    let fields = this.editModalForm.controls;
    return Object.keys(fields).reduce((formData, key) => {
      let data = fields[key].value;

      if (Array.isArray(data)) {
        for (let item of data) {
          formData.append(key + '[]', item);
        }
      } else {
        formData.append(key, data);
      }

      return formData;
    }, new FormData());
  }

  getFormValue() {
    let fields = this.editModalForm.controls;
    return Object.keys(fields).reduce((acc, key) => {
      acc[key] = fields[key].value;
      return acc;
    }, {});
  }

  onEdit(e, modal, entry, index) {
    var _a;

    e.preventDefault();
    this.modalEditRef = this.modalService.show(modal, {
      animated: false
    });
    this.modalEditRef.setClass('modal-dialog-centered modal-xl');
    this.modalEditLink = (_a = this.modalEditRef.onHide) === null || _a === void 0 ? void 0 : _a.subscribe(a => {
      this.editError = false;
    });

    if (this.fetchEdit) {
      this.fetchEdit({
        params: {
          id: entry.id
        },
        successFn: result => {
          this.onEditAddContent(result);
        },
        startLoadFn: () => {
          this.editLoading = true;
          this.rowsLoading = [...this.rowsLoading, entry.id];
        },
        endLoadFn: () => {
          this.editLoading = false;
          this.rowsLoading = this.rowsLoading.filter(item => item !== entry.id);
        }
      });
    } else {
      this.onEditAddContent(entry);
    }
  }

  onEditAddContent(data) {
    this.setFormValue(this.getDataWithEditFn(data));

    this.onModalEdit = e => {
      e.preventDefault();

      if (this.editModalForm.valid) {
        this.editError = false;
        this.fetchEditSave({
          data: this.isFormData ? this.getFormData() : this.getFormValue(),
          successFn: result => {
            var _a;

            this.replaceData(result);
            (_a = this.modalEditRef) === null || _a === void 0 ? void 0 : _a.hide();
          },
          errorLoadFn: e => {
            this.editError = e.reason || e.message;
          },
          startLoadFn: () => {
            this.editLoading = true;
            this.rowsLoading = [...this.rowsLoading, data.id];
          },
          endLoadFn: () => {
            this.editLoading = false;
            this.rowsLoading = this.rowsLoading.filter(item => item !== data.id);
          }
        });
      }
    };
  }

  replaceData(data) {
    this.data = this.data.map(item => {
      return item.id == data.id ? data : item;
    });
  }

  added(data) {
    this.paginator.append(this, 'data', Array.isArray(data) ? data : [data]); //this.data = [data, ...this.data];
  }

  onRemove(e, entry, index) {
    this.fetchRemove({
      data: {
        id: entry.id
      },
      successFn: result => {
        this.mutateData(result);
      },
      errorLoadFn: e => {
        console.error(e);
      },
      startLoadFn: () => {
        this.rowsLoading = [...this.rowsLoading, entry.id];
      },
      endLoadFn: () => {
        this.rowsLoading = this.rowsLoading.filter(item => item !== entry.id);
      }
    });
  }

  onRestore(e, entry, index) {
    this.fetchRestore({
      data: {
        id: entry.id
      },
      successFn: result => {
        this.mutateData(result);
      },
      errorLoadFn: e => {
        console.error(e);
      },
      startLoadFn: () => {
        this.rowsLoading = [...this.rowsLoading, entry.id];
      },
      endLoadFn: () => {
        this.rowsLoading = this.rowsLoading.filter(item => item !== entry.id);
      }
    });
  }

  mutateData(data) {
    this.data = this.data.map(item => {
      if (item.id == data.id) item = Object.assign(Object.assign({}, item), {
        deletedAt: data.deletedAt
      });
      return item;
    });
  }

  onDelete(e, modal, entry, index) {
    e.preventDefault();
    this.modalDeleteRef = this.modalService.show(modal, {
      animated: false
    });
    this.modalDeleteRef.setClass('modal-dialog-centered modal-lg');
    this.deletedId = entry.id;

    this.onModalDelete = e => {
      var _a;

      e.preventDefault();
      this.fetchDelete({
        data: {
          id: entry.id
        },
        successFn: result => {
          this.filterData(result);
        },
        errorLoadFn: e => {
          console.error(e);
        },
        startLoadFn: () => {
          this.rowsLoading = [...this.rowsLoading, entry.id];
        },
        endLoadFn: () => {
          this.rowsLoading = this.rowsLoading.filter(item => item !== entry.id);
        }
      });
      (_a = this.modalDeleteRef) === null || _a === void 0 ? void 0 : _a.hide();
    };
  }

  filterData(data) {
    this.paginator.remove(this, 'data', entry => entry.id !== data.id); //this.data = this.data.filter((entry) => entry.id !== data.id);
  }

  onMore(e) {
    this.fetchMore({
      params: {
        page: this.paginator.getPageForQuery()
      },
      successFn: result => {
        this.paginator.addWithReplace(this, 'data', result);
      },
      errorLoadFn: e => {
        console.error(e);
      },
      startLoadFn: () => {
        this.moreLoading = true;
      },
      endLoadFn: () => {
        this.moreLoading = false;
      }
    });
  }

}

ViewTableComponent.ɵfac = function ViewTableComponent_Factory(t) {
  return new (t || ViewTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService));
};

ViewTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ViewTableComponent,
  selectors: [["view-table"]],
  inputs: {
    isFormData: "isFormData",
    fields: "fields",
    editFields: "editFields",
    fetch: "fetch",
    fetchMore: "fetchMore",
    isEdit: "isEdit",
    isRemove: "isRemove",
    isDelete: "isDelete",
    fetchEdit: "fetchEdit",
    fetchEditSave: "fetchEditSave",
    fetchRemove: "fetchRemove",
    fetchRestore: "fetchRestore",
    fetchDelete: "fetchDelete"
  },
  decls: 22,
  vars: 8,
  consts: [[1, "container-fluid"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "col", "colspan", "3", 1, "text-center"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-info", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["modal_edit", ""], ["modal_delete", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "ml-auto"], [1, "text-center"], [1, "h5"], [1, "text-secondary"], ["class", "btn-sm btn-primary", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-sm", "btn-primary", 3, "click"], ["class", "btn-sm btn-secondary", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn-sm btn-success", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn-sm", "btn-success", 3, "click"], ["type", "button", 1, "btn-sm", "btn-danger", 3, "click"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "modal-footer", "justify-content-center"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [3, "type", "dismissible"], [1, "row", "justify-content-center"], ["role", "status", 1, "col-auto", "spinner-border", 2, "width", "10rem", "height", "10rem"], [1, "sr-only"], [3, "formGroup"], [1, "row", "row-cols-1"], [1, "col", "row", "mt-1", "mb-1", "align-items-center"], [1, "col-auto"], [1, "h6"], [3, "type", "fn", "valid", "control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "h2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
  template: function ViewTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ViewTableComponent_ng_container_6_Template, 3, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ViewTableComponent_ng_container_10_Template, 10, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ViewTableComponent_ng_container_11_Template, 3, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewTableComponent_Template_button_click_14_listener($event) {
        return ctx.onMore($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ViewTableComponent_span_15_Template, 1, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "more");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ViewTableComponent_ng_template_18_Template, 15, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ViewTableComponent_ng_template_20_Template, 15, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.fields);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", ctx.fields.length + 1 + 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"]("width:100%; display: block;");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.moreLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.moreLoading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__.AlertComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _edit_field_edit_field_component__WEBPACK_IMPORTED_MODULE_2__.EditFieldComponent],
  styles: [".view-table-hidden-field[_ngcontent-%COMP%] {display: none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcudGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQixhQUFhLENBQUMiLCJmaWxlIjoidmlldy50YWJsZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy10YWJsZS1oaWRkZW4tZmllbGQge2Rpc3BsYXk6IG5vbmU7fSJdfQ== */"]
});

/***/ }),

/***/ 7628:
/*!*************************************************!*\
  !*** ./src/app/view-table/view.table.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTableModule": () => (/* binding */ ViewTableModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1510);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 482);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ 9262);
/* harmony import */ var _view_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.table.component */ 7561);
/* harmony import */ var _edit_field_edit_field_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-field/edit.field.module */ 9244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);








class ViewTableModule {
}
ViewTableModule.ɵfac = function ViewTableModule_Factory(t) { return new (t || ViewTableModule)(); };
ViewTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ViewTableModule });
ViewTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.ModalModule,
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__.AlertModule,
            _edit_field_edit_field_module__WEBPACK_IMPORTED_MODULE_1__.EditFieldModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewTableModule, { declarations: [_view_table_component__WEBPACK_IMPORTED_MODULE_0__.ViewTableComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.ModalModule,
        ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__.AlertModule,
        _edit_field_edit_field_module__WEBPACK_IMPORTED_MODULE_1__.EditFieldModule], exports: [_view_table_component__WEBPACK_IMPORTED_MODULE_0__.ViewTableComponent] }); })();


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