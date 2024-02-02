import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  FormGroup } from '@angular/forms';

@Component({
    selector: 'app-filter-form1',
    templateUrl: './filter-form1.component.html',
    styleUrls: ['./filter-form1.component.scss']
})
export class FilterForm1Component {

    @Input() authorList: unknown[] = [];
    @Input() form: FormGroup = new FormGroup({});
    @Output() clean: EventEmitter<void> = new EventEmitter();

    // private formSubs: Subscription;

    // constructor(private fb: FormBuilder) { }

    // ngOnInit(): void {
    //     // this.cleanFilters();
    //     // this.formSubs = this.form.valueChanges.pipe(debounceTime(400)).subscribe(() => {
    //     //     this.onFilter();
    //     // });
    // }

    // ngOnDestroy(): void {
    //     // this.formSubs.unsubscribe();
    // }

    // onFilter(): void {
    //     this.filter.emit(this.form.value);
    //     // console.log(this.form.value);
    // }

    onCleanFilters(): void {
        // this.form = this.fb.group({
        //     prinex: '',
        //     simulationName: '',
        //     author: '',
        //     date: null,
        // });
        this.clean.emit();
    }
}
