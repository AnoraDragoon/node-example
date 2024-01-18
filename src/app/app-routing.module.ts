import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './web/home-page/home-page.component';
import { TestTablePageComponent } from './web/test-table-page/test-table-page.component';
import { PrimengTablePageComponent } from './web/primeng-table-page/primeng-table-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'test-table', component: TestTablePageComponent },
  { path: 'primeng-table', component: PrimengTablePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
