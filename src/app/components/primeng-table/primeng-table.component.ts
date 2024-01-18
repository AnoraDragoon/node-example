import { Component, Input } from '@angular/core';
import { TableData } from 'src/app/models/table-data.model';

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.scss']
})
export class PrimengTableComponent {

    @Input() data: TableData[] = [];

    ngOnInit() {
        console.log(this.data);
    }
}
