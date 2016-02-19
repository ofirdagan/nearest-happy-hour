import {Injectable} from 'angular2/core';
import {BARS} from '../mocks/mock-bars';

@Injectable()
export class BarsService {
  getBars() {
    return Promise.resolve(BARS);
  }
}