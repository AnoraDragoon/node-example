import { Injectable } from '@angular/core';
import { TableData } from '../models/table-data.model';
import { DATA_TABLE_MOCK } from '../models/table-data.mock';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PrimengTableService {

    serviceData: TableData[] = DATA_TABLE_MOCK;

    constructor() {
    }

    getDataObservable(): Observable<TableData[]> {
        return of(this.serviceData);
    }

    getData(): TableData[] {
        return this.serviceData;
    }

    getAthors(): string[] {
        return this.serviceData.filter((_, index) => index % 3 && index < 50).map(item => item.author);
    }
}

