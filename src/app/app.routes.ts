import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: 'pase-de-visita',
    loadComponent: () => import('./pase-de-visita/pase-de-visita.page').then( m => m.PaseDeVisitaPage)
  },

  {
    path: 'registro-madre',
    loadComponent: () => import('./registro-madre/registro-madre.page').then( m => m.RegistroMadrePage)
  },

  {
    path: 'crear-historia-clinica',
    loadComponent: () => import('./crear-historia-clinica/crear-historia-clinica.page').then( m => m.CrearHistoriaClinicaPage)
  },
  {
    path: 'menu-historial-clinico',
    loadComponent: () => import('./menu-historial-clinico/menu-historial-clinico.page').then( m => m.MenuHistorialClinicoPage)
  },
  {
    path: 'buscar-historia-clinica',
    loadComponent: () => import('./buscar-historia-clinica/buscar-historia-clinica.page').then( m => m.BuscarHistoriaClinicaPage)
  },
  {
    path: 'ver-historia-clinica',
    loadComponent: () => import('./ver-historia-clinica/ver-historia-clinica.page').then( m => m.VerHistoriaClinicaPage)
  },
  {
    path: 'reporte-paciente',
    loadComponent: () => import('./reporte-paciente/reporte-paciente.page').then( m => m.ReportePacientePage)
  },
  {
    path: 'procura',
    loadComponent: () => import('./procura/procura.page').then( m => m.ProcuraPage)
  },
  {
    path: 'actualizar-historia-clinica',
    loadComponent: () => import('./actualizar-historia-clinica/actualizar-historia-clinica.page').then( m => m.ActualizarHistoriaClinicaPage)
  },

];
