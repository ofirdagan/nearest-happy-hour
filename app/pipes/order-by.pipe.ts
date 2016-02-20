import {Pipe, PipeTransform} from 'angular2/core';
let _ = require('lodash');

declare var Array: any;

@Pipe({
  name: 'orderBy'
})
export class OrderBy implements PipeTransform {

  transform(input: Object[], [field, desc = false]: [string, boolean]): Object[] {
    if (input && field) {
      return input.sort((a: Object, b: Object) => { //used to be Array.from(input)
        if (_.get(a, field) < _.get(b, field)) {
          return desc ? 1 : -1;
        }
        if (_.get(a, field) > _.get(b, field)) {
          return desc ? -1 : 1;
        }
        return 0;
      });
    }
    return input;
  }

}