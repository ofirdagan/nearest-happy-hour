import {Injectable} from 'angular2/core';
import {BARS} from '../mocks/mock-bars';
import {LocationService} from "./location.service";
import {Bar, BarDto} from "../model/model";
import {Location} from "../model/model";

@Injectable()
export class BarsService {
  private bars: BarDto[];
  constructor(private location: LocationService) {
    this.bars = BARS;
  }

  getBars(): any {
    let promise = new Promise((resolve) => {
      let distances = this.bars.map((barDto: BarDto) => this.getBarDistance(barDto));
      let bars = Promise.all(distances).then(barDistances => {
        return this.bars.map((barDto: BarDto, index: number) => {
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

  addBar(name: string, url: string, location: Location) {
    this.bars.push(new BarDto(name, url, location, 0));
  }
}