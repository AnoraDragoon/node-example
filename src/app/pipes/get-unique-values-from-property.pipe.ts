import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getUniqueValuesFromProperty'
})
export class GetUniqueValuesFromPropertyPipe implements PipeTransform {
    transform(value: any[], field: string): any[] {
        return [...new Set(value.map(x => x[field]))];
    }
}
