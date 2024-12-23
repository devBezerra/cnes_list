import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CnesTableComponent } from './components/cnes-table/cnes-table.component';
import { CnesFormComponent } from './components/cnes-form/cnes-form.component';

const routes: Routes = [
  {
    path: '',
    component: CnesTableComponent,
  },
  {
    path: 'cadastrar',
    component: CnesFormComponent,
  },
  {
    path: 'estabelecimento/:code',
    component: CnesFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CnesRouting {}
