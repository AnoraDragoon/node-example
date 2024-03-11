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
import { FilterForm1Component } from './components/filter-form1/filter-form1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * Prime NG
 */
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { Mapbox1PageComponent } from './web/mapbox1-page/mapbox1-page.component';
// import { CalendarModule } from 'primeng/calendar';
// import { InputNumberModule } from 'primeng/inputnumber';
/**
 * mapbox
 */
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';


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
        PrimengTableComponent,
        FilterForm1Component,
        Mapbox1PageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        TableModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        CalendarModule,
        NgxMapboxGLModule.withConfig({
            accessToken: environment.mapbox_token
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
