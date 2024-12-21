import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
      translation: {
        contains: 'Contém',
        notContains: 'Não contém',
        equals: 'Igual a',
        notEquals: 'Diferente de',
        startsWith: 'Começa com',
        endsWith: 'Termina com',
        lt: 'Menor que',
        lte: 'Menor ou igual a',
        gt: 'Maior que',
        gte: 'Maior ou igual a',
        is: 'É',
        isNot: 'Não é',
        before: 'Antes',
        after: 'Depois',
        clear: 'Limpar',
        apply: 'Aplicar',
        matchAll: 'Corresponder a todos',
        matchAny: 'Corresponder a qualquer',
        addRule: 'Adicionar Regra',
        removeRule: 'Remover Regra',
        noFilter: 'Sem Filtro'
      }
    }),
    provideHttpClient(withFetch()),
  ],
};
