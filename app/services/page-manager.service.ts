import {Injectable} from 'angular2/core';

export enum PAGE {
  list,
  addBar
}


@Injectable()
export class PageManager {
  private page: PAGE = PAGE.list;

  getCurrent(): PAGE {
    return this.page;
  }

  goTo(page: PAGE) {
    this.page = page;
  }
}