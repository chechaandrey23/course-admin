export class Paginator {
	protected countRows: number = 0;
	protected currentPage: number = 1;
	protected lastAddCountRow: number = 0;

	constructor(defaultCountRows: number) {
		this.countRows = defaultCountRows * 1;
	}

	public replace(state: any, stateName: string, data: Array<any>): Paginator {
		state[stateName] = [...data];
		if(data.length >= this.countRows) {
			this.currentPage++;// only 1 page
			this.lastAddCountRow = 0;
		} else {
			this.lastAddCountRow = data.length;
		}
		return this;
	}

	public remove(state: any, stateName: string, fn: Function): Paginator {
		state[stateName] = state[stateName].filter((entry: any, index: number, array: Array<any>) => {
			const res =  fn(entry, index, array);
			if(!res) {
				this.lastAddCountRow--;
				if(this.lastAddCountRow < 0) {
					this.lastAddCountRow = this.countRows - 1;
					this.currentPage--;
					if(this.currentPage < 1) this.currentPage = 1;
				}
			}
			return res;
		});
		return this;
	}

	public append(state: any, stateName: string, data: Array<any>): Paginator {
		state[stateName] = [...data, ...state[stateName]];
		return this;
	}

	public addWithReplace(state: any, stateName: string, data: Array<any>): Paginator {
		if(this.lastAddCountRow === 0) {
			state[stateName] = [...state[stateName], ...data];
		} else {
			const end = state[stateName].length - this.lastAddCountRow;
			state[stateName] = [...state[stateName].slice(0, end<0?0:end), ...data];
		}
		if(data.length >= this.countRows) {
			this.currentPage++;// only 1 page
			this.lastAddCountRow = 0;
		} else {
			this.lastAddCountRow = data.length;
		}
		return this;
	}

	public addToEnd(state: any, stateName: string, data: Array<any>): Paginator {
		state[stateName] = [...state[stateName], ...data];
		this.lastAddCountRow += data.length;
		if(this.lastAddCountRow >= this.countRows) {
			this.currentPage += Math.floor(this.lastAddCountRow/this.countRows);
			this.lastAddCountRow = this.lastAddCountRow % this.countRows;
		}
		return this;
	}

	public getPageForQuery(): number {
		return this.currentPage;
	}
}
