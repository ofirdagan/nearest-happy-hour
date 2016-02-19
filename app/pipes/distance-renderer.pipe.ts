import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
  name: 'distanceRenderer'
})
export class DistanceRendererPipe implements PipeTransform{
  transform(value) {
    return (value / 1000).toFixed(2) + 'km';
  }
}