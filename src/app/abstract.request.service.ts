import axios from 'axios';

import {defaultRequestSettings} from './helpers/helper.default.request.settings';

export type Method = "GET"|"POST";

export type MiddlewareFn = (a: any) => Promise<any>;

export type StartLoadFn = () => void;
export type EndLoadFn = () => void;
export type ErrorLoadFn = (a: any) => void;
export type SuccessFn = (a: any) => void;

export interface Entry {
	method: Method;
	url: string;
	middlewareFn?: MiddlewareFn;
	startLoadFn?: StartLoadFn;
	endLoadFn?: EndLoadFn;
	errorLoadFn?: ErrorLoadFn;
	successFn?: SuccessFn;
	options: any;
}

export class AbstractRequestError extends Error {}

export abstract class AbstractRequestService {

	private storage: {[n: string]: Entry} = {};

	public request(opts: any) {
		opts = opts || {};
		return new Promise((res: Function, rej: Function) => {
			axios(opts).then((response) => {
				res(response);
			}).catch((e) => {
				if(e.response && e.response.status === 401 && opts.JWTRefreshUpdate) {
					axios({
						method: opts.JWTRefreshUpdateMethod || 'GET',
						url: opts.JWTRefreshUpdateURL
					}).then((response) => {
						axios(opts).then((response) => {
							res(response);
						}).catch((e) => {
							rej(this.getError(e))
						});
					}).catch((e) => {
						rej(this.getError(e));
						if(e.response && e.response.status === 401 && opts.JWTRefreshFailUrl) location.href = opts.JWTRefreshFailUrl;
					});
				} else {
					rej(this.getError(e));
				}
			});
		});
	}

	protected getError(e: any) {
		if(e.response) {
			if(!e.response.data) e.response.data = e;
			return e.response;
		} else if(e.request) {
			if(!e.request.data) e.request.data = e;
			return e.request;
		} else {
			if(!e.data) e.data = e;
			return e;
		}
	}

	public async fetch(ns: string, opts: any): Promise<any> {
		if(!this.storage.hasOwnProperty(ns)) {
			throw new AbstractRequestError(`The entity for "${ns}" is not defined`);
		}

		const entry: Entry = this.storage[ns];

		let newOptions = Object.assign({}, entry.options, opts || {}, {method: entry.method, url: entry.url});

		const startLoadFn: any = typeof opts.startLoadFn === 'function'?opts.startLoadFn:entry.startLoadFn;
		const successFn: any = typeof opts.successFn === 'function'?opts.successFn:entry.successFn;
		const errorLoadFn: any = typeof opts.errorLoadFn === 'function'?opts.errorLoadFn:entry.errorLoadFn;
		const endLoadFn: any = typeof opts.endLoadFn === 'function'?opts.endLoadFn:entry.endLoadFn;

		let data: any = null;
		try {
			if(startLoadFn) startLoadFn();
			let res: any = await this.request(newOptions);
			if(entry.middlewareFn) res = await entry.middlewareFn(res);
			if(successFn) successFn(res.data);
			data = res.data;
		} catch(e: any) {
			if(errorLoadFn) errorLoadFn(e.data);
		} finally {
			if(endLoadFn) endLoadFn();
		}

		return data;
	}

	public addEntry(
		namespace: string, method: Method, url: string, options?: any, middlewareFn?: MiddlewareFn,
		successFn?: SuccessFn, startLoadFn?: StartLoadFn, endLoadFn?: EndLoadFn, errorLoadFn?: ErrorLoadFn,
	): AbstractRequestService {
		if(this.storage.hasOwnProperty(namespace)) throw new AbstractRequestError(`An entity with the same name as ${namespace} already exists`);
		this.storage[namespace] = {method, url, middlewareFn, startLoadFn, endLoadFn, errorLoadFn, options: options || {}};
		return this;
	}

}
