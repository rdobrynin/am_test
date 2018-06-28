import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generateArray'
})
export class GenerateArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Object.keys(value).map((key)=>{
      return {key:key, value:value[key]}
    });
  }

}
