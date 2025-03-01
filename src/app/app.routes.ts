import { Routes } from '@angular/router';

export const routes: Routes = [
        {path: 'pacientes', loadComponent: ()=> import('./pacientes/pacientes.page').then(m => m.PacientesPage)},
  {
    path: 'pase-de-visita',
    loadComponent: () => import('./pase-de-visita/pase-de-visita.page').then( m => m.PaseDeVisitaPage)
  },
  {
    path: 'dispensacion',
    loadComponent: () => import('./dispensacion/dispensacion.page').then( m => m.DispensacionPage)
  }
];
