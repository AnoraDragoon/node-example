import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'primeng/table';
import { TableData } from 'src/app/models/table-data.model';

@Component({
    selector: 'app-primeng-table',
    templateUrl: './primeng-table.component.html',
    styleUrls: ['./primeng-table.component.scss']
})
export class PrimengTableComponent {

    @Input() data: TableData[] = [];
    @Input() authorList: string[] = [];
    @Input() isLoading: boolean = false;
    @Input() totalRecords: number = 0;


    @Output() reload: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        // console.log(this.data);
    }
    reloadData(event: any) {
        this.reload.emit(event);
    }

    clearFilters(table: Table) {
        table.clear();
    }

    // filterCallback(value: any): void {
    //     console.log(value);
    // }
}
