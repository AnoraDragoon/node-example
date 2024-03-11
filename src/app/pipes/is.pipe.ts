import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'is'
})
export class IsPipe implements PipeTransform {

  transform(value: unknown, callBack: (value: any, ...args: unknown[]) => value is boolean, ...args: unknown[]): boolean {
    return callBack(value, ...args);
  }

}
