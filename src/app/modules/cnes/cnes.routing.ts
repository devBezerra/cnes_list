import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CnesTableComponent } from './components/cnes-table/cnes-table.component';
import { CnesDetailsComponent } from './components/cnes-details/cnes-details.component';

const routes: Routes = [
  {
    path: '',
    component: CnesTableComponent,
  },
  {
    path: 'estabelecimento/:code',
    component: CnesDetailsComponent,
  },   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CnesRouting {}
