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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestTablePageComponent,
    HeaderComponent,
    CompletedTableComponent,
    HighlightDirective,
    Table2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
