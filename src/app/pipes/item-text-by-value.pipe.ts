import { Pipe, PipeTransform } from '@angular/core';
import { FilterItem } from '../models/filter-item';

@Pipe({
  name: 'itemTextByValue'
})
export class ItemTextByValuePipe implements PipeTransform {

  transform(value: FilterItem[], args: boolean | number | string): string {
    const result = value.find(item => item.value === args);
    return result?.text;
  }

}
