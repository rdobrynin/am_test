import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generateArray'
})
export class GenerateArrayPipe implements PipeTransform {
  /**
   * Array to Obj
   * @param value
   * @param args
   * @returns {any}
   */
  transform(value: any, args?: any): any {
    return Object.keys(value).map((key) => {
      return {key: key, value: value[key]};
    });
  }

}
