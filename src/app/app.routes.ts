import { Routes } from '@angular/router';

export const routes: Routes = [
        { path: 'pacientes1',
          loadComponent: () => import('./pacientes1/pacientes1.page').then( m => m.Pacientes1Page)},
  {
    path: 'pase-de-visita',
    loadComponent: () => import('./pase-de-visita/pase-de-visita.page').then( m => m.PaseDeVisitaPage)
  },
  {
    path: 'dispensacion',
    loadComponent: () => import('./dispensacion/dispensacion.page').then( m => m.DispensacionPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'donantes',
    loadComponent: () => import('./donantes/donantes.page').then( m => m.DonantesPage)
  },
  {
    path: 'registro-leche',
    loadComponent: () => import('./registro-leche/registro-leche.page').then( m => m.RegistroLechePage)
  },
  {
    path: 'registro-madre',
    loadComponent: () => import('./registro-madre/registro-madre.page').then( m => m.RegistroMadrePage)
  },
  
  
];
