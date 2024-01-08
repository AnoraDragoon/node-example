import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], callBack: (value: any, index: number, array: any[]) => value is any): any[] {
    return value.filter(callBack);
  }
}

