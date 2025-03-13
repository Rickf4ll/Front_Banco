import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'almacen', pathMatch: 'full' },
    { path: 'almacen', loadComponent: () => import('./almacen/almacen.page').then(m => m.AlmacenPage) },
    { path: 'registropasteurizado', loadComponent: () => import('./registropasteurizado/registropasteurizado.page').then(m => m.RegistroPasteurizadoPage) },
    { path: 'registroautologa', loadComponent: () => import('./registroautologa/registroautologa.page').then(m => m.RegistroAutologaPage) },
    { path: 'lechesdisponibles', loadComponent: () => import('./lechesdisponibles/lechesdisponibles.page').then(m => m.LechesDisponiblesPage)},
    { path: 'alertas', loadComponent: () => import('./alertas/alertas.page').then(m => m.AlertasPage) },
  /*{
    path: 'reportes',
    loadComponent: () => import('./reportes/reportes.page').then( m => m.ReportesPage)
  },
  {
    path: 'detallespedido',
    loadComponent: () => import('./detallespedido/detallespedido.page').then( m => m.DetallespedidoPage)
  },
  {
    path: 'detallespedidovista',
    loadComponent: () => import('./detallespedidovista/detallespedidovista.page').then( m => m.DetallespedidovistaPage)
  },
  {
    path: 'detallespedidovista',
    loadComponent: () => import('./detallespedidovista/detallespedidovista.page').then( m => m.DetallespedidovistaPage)
  },*/

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule{}
