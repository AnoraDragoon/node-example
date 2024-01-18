import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/models/table-data.model';
import { PrimengTableService } from 'src/app/services/primeng-table.service';

@Component({
    selector: 'app-primeng-table-page',
    templateUrl: './primeng-table-page.component.html',
    styleUrls: ['./primeng-table-page.component.scss']
})
export class PrimengTablePageComponent implements OnInit {

    datatable: TableData[] = [];


    constructor(private primengTableService: PrimengTableService) { }

    ngOnInit(): void {
        // this.datatable = this.primengTableService.serviceData;
        setTimeout(() => { this.datatable = this.primengTableService.serviceData; }, 1);
    }



}
