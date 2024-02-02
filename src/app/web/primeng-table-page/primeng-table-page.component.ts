import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { TableData } from 'src/app/models/table-data.model';
import { PrimengTableService } from 'src/app/services/primeng-table.service';

@Component({
    selector: 'app-primeng-table-page',
    templateUrl: './primeng-table-page.component.html',
    styleUrls: ['./primeng-table-page.component.scss']
})
export class PrimengTablePageComponent implements OnInit, OnDestroy {

    datatable: TableData[] = [];
    filterForm: FormGroup = this.fb.group({ prinex: '', simulationName: '', author: '', date: null, });
    authorList: string[] = [];
    tableLoading: boolean = false;

    private formSubs: Subscription = new Subscription();


    constructor(private primengTableService: PrimengTableService, private fb: FormBuilder) {
        this.filterForm = this.fb.group({
            prinex: '',
            simulationName: '',
            author: '',
            date: null,
        });
    }

    ngOnInit(): void {
        this.formSubs = this.filterForm.valueChanges.pipe(debounceTime(800)).subscribe(() => {
            console.log(this.filterForm.value);
            this.reloadData();
        });
        this.authorList = this.primengTableService.getAthors();
        this.reloadData();
    }

    ngOnDestroy(): void {
        this.formSubs.unsubscribe();
    }

    reloadData(eventData: any = null): void {
        this.tableLoading = true;
        console.log(eventData);
        setTimeout(() => {
            this.datatable = this.primengTableService.serviceData;
            this.tableLoading = false;
        }, 1000);
    }


    cleanFilters(): void {
        this.filterForm.reset({ prinex: '', simulationName: '', author: '', date: null, });
    }

    resetFilter(controlName: string, value: any = null) {
        this.filterForm.get(controlName)?.reset(value);
    }

}
