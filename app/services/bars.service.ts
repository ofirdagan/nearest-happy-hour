import {Injectable} from 'angular2/core';
import {LocationService} from "./location.service";
import {Bar, BarDto} from "../model/model";
import {Location} from "../model/model";
import {HappyHourApi} from "./happy-hour-api.service";
var firebase = require("nativescript-plugin-firebase");


@Injectable()
export class BarsService {
  public bars: Bar[];

  constructor(private location: LocationService, private happyHourApi: HappyHourApi) {
    this.bars = [];
  }

  onBarFetched(barDto: BarDto) {
    this.getBarDistance(barDto).then((distance) => {
      let bar = new Bar(barDto, distance);
      console.log('onBarFetched: ', barDto.name);
      this.bars = this.bars.concat(bar);
    });
  }

  fetchBars(): void {
    this.happyHourApi.getBarsFromDB((barDto) => this.onBarFetched(barDto));
  }

  getBarDistance(bar: BarDto) {
    return this.location.getDistanceFromCurrentLocation(bar.location);
  }

  saveBar(bar: BarDto) {
    this.happyHourApi.saveBar(bar);
  }
}