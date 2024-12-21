import { Routes } from '@angular/router';

export const routes: Routes = [  {
    path: '',
    loadChildren: () =>
      import('./modules/cnes/cnes.routing').then(
        (m) => m.CnesRouting
      ),
  },];
