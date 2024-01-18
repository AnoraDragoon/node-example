import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './web/home-page/home-page.component';
import { TestTablePageComponent } from './web/test-table-page/test-table-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CompletedTableComponent } from './components/completed-table/completed-table.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Table2Component } from './components/table2/table2.component';
import { PrimengTablePageComponent } from './web/primeng-table-page/primeng-table-page.component';
import { PrimengTableComponent } from './components/primeng-table/primeng-table.component';
import { TableModule } from 'primeng/table';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        TestTablePageComponent,
        HeaderComponent,
        CompletedTableComponent,
        HighlightDirective,
        Table2Component,
        PrimengTablePageComponent,
        PrimengTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        TableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
