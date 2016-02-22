import {Injectable} from 'angular2/core';
import {BarDto} from "../model/model";
var firebase = require("nativescript-plugin-firebase");


@Injectable()
export class HappyHourApi {
  private init = false;

  getBarsFromDB(onBarFetched: (barDto: BarDto) => void) {
    return this.initFirebase().then(() => {
      return firebase.query((data) => onBarFetched(<BarDto>(data.value)), '/bars', {
        orderBy: {
          type: firebase.QueryOrderByType.KEY
        }
      });
    });
  }

  saveBar(barDto: BarDto) {
    firebase.push('/bars', barDto);
  }

  private initFirebase() {
    let promise = new Promise((resolve, reject) => {
      if (this.init) {
        resolve();
      }
      firebase.init({url: 'https://neareast-happy-hour.firebaseio.com'}).then(() => {
        this.init = true;
        resolve();
      }, err => {
        console.log('error init firebase', err);
        reject();
      });
    });
    return promise;
  }
}