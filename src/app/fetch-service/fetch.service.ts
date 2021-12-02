import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export type MiddlewareFn = (a: any) => Promise<any>;

export interface Entry {
	cbs: Array<Function>;
	ecbs: Array<Function>;
	url: string;
	options: any;
	query: any;
	middleware: MiddlewareFn;
}

export type Method = "GET"|"POST";

export class FetchServiceError extends Error {}

export abstract class FetchService {
	private storage: {[n: string]: Entry} = {};
	
	constructor(private readonly http: HttpClient) {
		if(!(this.http instanceof HttpClient)) {
			throw new FetchServiceError('An instance of the "HttpClient" class must be passed to the constructor');
		}
	}
	
	public get<T>(namespace: string, options: object = {}): FetchService {
		return this.fetch<T>(namespace, 'GET', null, options);
	}
	
	public post<T>(namespace: string, data: any = null, options: object = {}): FetchService {
		return this.fetch<T>(namespace, 'POST', data, options);
	}
	
	public fetch<T>(namespace: string, method: Method, data: any, options: object): FetchService {
		namespace += method;
		if(!this.storage.hasOwnProperty(namespace)) {
			throw new FetchServiceError(`The entity for "${namespace}"(${method}) is not defined`);
		}
		
		let entry: Entry = this.storage[namespace];
		
		if(entry.query) {
			entry.query.unsubscribe();
			entry.query = null;
		}
		
		let query;
		
		if(method === 'GET') {
			query = this.http.get<any>(entry.url, Object.assign({}, entry.options, options));
		} else {
			query = this.http.post<any>(entry.url, data, Object.assign({}, entry.options, options));
		}
		
		entry.query = query.pipe(catchError((e) => {
			entry.query.unsubscribe();
			entry.query = null;
			this.pushError(namespace, e);
			return of(null);
		})).subscribe((data: any) => {this.push(namespace, data as T)});
		
		return this;
	}
	
	// Observable
	public source<T>(namespace: string, method: Method = "GET"): Observable<T> {
		namespace += method;
		if(!this.storage.hasOwnProperty(namespace)) {
			throw new FetchServiceError(`The entity for "${namespace}" is not defined`);
		}
		let entry: Entry = this.storage[namespace];
		
		return new Observable<T>((observer) => {
			let f: Function = (data:any) => {
				observer.next(data as T);// call-back .subscribe
			}
			entry.cbs.push(f);
			return {
				unsubscribe: () => {
					entry.cbs = entry.cbs.filter((fn: Function) => {
						return fn !== f;
					});
				}
			}
		});
	}
	
	public error<T>(namespace: string, method: Method = "GET"): Observable<T> {
		namespace += method;
		if(!this.storage.hasOwnProperty(namespace)) {
			throw new FetchServiceError(`The entity in Error for "${namespace}" is not defined`);
		}
		let entry: Entry = this.storage[namespace];
		
		return new Observable<T>((observer) => {
			let f: Function = (data:any) => {
				observer.next(data as T);// call-back .subscribe
			}
			entry.ecbs.push(f);
			return {
				unsubscribe: () => {
					entry.ecbs = entry.ecbs.filter((fn: Function) => {
						return fn !== f;
					});
				}
			}
		});
	}
	
	protected push(namespace:string, data:any): FetchService {
		let entry: Entry = this.storage[namespace];
		entry.middleware.call(this, data).then((data: any) => {
			this.storage[namespace].cbs.map((f: any) => {
				f.call(null, data);
			});
		}).catch((e: Error) => {
			throw e;
		});
		return this;
	}
	
	protected pushError(namespace:string, data:Error) {
		this.storage[namespace].ecbs.map((f: any) => {
			f.call(null, data);
		});
	}
	
	protected addEntry(
		namespace: string, 
		method: Method,
		url: string, 
		middleware: MiddlewareFn = async (a: any): Promise<any> => {return a;}, 
		options: object = {}
	): FetchService {
		this.storage[namespace+method] = {cbs: [], ecbs: [], url, options, middleware, query: null};
		return this;
	}
}
