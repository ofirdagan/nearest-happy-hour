import {Injectable} from 'angular2/core';
import {BARS} from '../mocks/mock-bars';
import {LocationService} from "./location.service";
import {Bar, BarDto} from "../model/model";

@Injectable()
export class BarsService {

  constructor(private location: LocationService) {
  }

  getBars(): any {
    let promise = new Promise((resolve) => {
      let distances = BARS.map((barDto: BarDto) => this.getBarDistance(barDto));
      let bars = Promise.all(distances).then(barDistances => {
        return BARS.map((barDto: BarDto, index: number) => {
          return new Bar(barDto.name, barDto.imageUrl, barDto.location, barDto.rating, barDistances[index]);
        });
      });
      resolve(bars);
    });
    return promise;
  }

  getBarDistance(barDto) {
    return this.location.getDistanceFromCurrentLocation(barDto.location);
  }
}