import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTermMultiple'
})
export class SearchTermMultiplePipe implements PipeTransform {
  public transform(values: any[][], keys: string, term: string): any[][] {
    if (!term) return values;
    if (!values) return [];

    // Filtrar cada sub-array individualmente y eliminar sub-arrays vacíos
    const filteredValues = values
      .map(subArray =>
        (subArray || []).filter(item =>
          keys.split(',').some(key =>
            item[key] && item[key].toString().toLowerCase().indexOf(term.toString().toLowerCase()) > -1
          )
        )
      )
      .filter(subArray => subArray.length > 0); // Filtra los sub-arrays que después del filtrado quedan vacíos

    return filteredValues;
  }
}
