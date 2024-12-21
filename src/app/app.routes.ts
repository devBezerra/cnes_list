import { Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/cnes/cnes.routing').then((m) => m.CnesRouting),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
