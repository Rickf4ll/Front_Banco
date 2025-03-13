import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonInput, 
    IonButton
  ]
})
export class AlertasPage implements OnInit {

  alertas: any[] = [
    { tipo: 'CALOSTRO', emergencia: 'sí', cantidad: '...', estado: 'PENDIENTE' },
    { tipo: 'TRANSICION', emergencia: 'no', cantidad: '...', estado: 'PENDIENTE' },
    { tipo: 'CALOSTRO', emergencia: 'sí', cantidad: '...', estado: 'LISTO' },
    { tipo: 'CALOSTRO', emergencia: 'no', cantidad: '...', estado: 'ENTREGADO' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  cambiarEstado(index: number, nuevoEstado: string) {
    this.alertas[index].estado = nuevoEstado;
  }

  navegarA(destino: string, index: number) {
    if (destino === 'detallespedido' && this.alertas[index].estado === 'PENDIENTE') {
      this.router.navigate(['/detallespedido', { id: index }]);
    } else if (destino === 'detallespedidovista' && this.alertas[index].estado === 'LISTO') {
      this.router.navigate(['/detallespedidovista', { id: index }]);
    }
  }
}