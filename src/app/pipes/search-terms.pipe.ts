import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchTerm'
})
export class SearchTermPipe implements PipeTransform {
    public transform(value, keys: string, term: string) {

        if (!term) return value;
        return (value || []).filter(item => keys.split(',').some(key => item[key] && item[key].toString().toLowerCase().indexOf(term.toString().toLowerCase()) > -1));

    }
}
