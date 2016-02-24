import {Injectable} from 'angular2/core';

export enum PAGE {
  list,
  addBar,
  editBar,
  barsMap
}


@Injectable()
export class PageManager {
  private page: PAGE = PAGE.list;
  private state;

  getCurrent(): PAGE {
    return this.page;
  }

  getState() {
    return this.state;
  }

  goTo(page: PAGE, state?) {
    this.page = page;
    this.state = state;
  }
}