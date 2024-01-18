import { Injectable } from '@angular/core';
import { TableData } from '../models/table-data.model';
import { DATA_TABLE_MOCK } from '../models/table-data.mock';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PrimengTableService {

    serviceData: TableData[] = [];

    constructor() {
        for (let index = 0; index < 20; index++) {
            this.serviceData = this.serviceData.concat(DATA_TABLE_MOCK);
        }
    }

    // getData(): Observable<TableData[]> {
    //     // setTimeout(() => this.serviceData, 2).;
    //     // (this.serviceData)

    // }
}

