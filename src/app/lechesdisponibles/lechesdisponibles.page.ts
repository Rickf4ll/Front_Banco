import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Platform, NavController } from '@ionic/angular';
import { IonContent, IonButton, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-leches-disponibles',
  templateUrl: './lechesdisponibles.page.html',
  styleUrls: ['./lechesdisponibles.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonHeader,
    IonToolbar,
    IonTitle
  ]
})
export class LechesDisponiblesPage implements OnInit {

  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktop: boolean = false;

  leches: any[] = [
    {
      tipo: 'CALOSTRO',
      tiposCaloricos: [
        { calorico: 'Hipercalórico', leches: [{ codigo: 'C-167', cantidad: 180, kcal: 806 }, { codigo: 'C-213', cantidad: 210, kcal: 760 }, { codigo: 'C-121', cantidad: 100, kcal: 700 }] },
        { calorico: 'Normocalórico', leches: [{ codigo: 'C-167', cantidad: 180, kcal: 699 }, { codigo: 'C-213', cantidad: 210, kcal: 597 }, { codigo: 'C-121', cantidad: 100, kcal: 500 }] },
        { calorico: 'Hipocalórico', leches: [{ codigo: 'C-167', cantidad: 180, kcal: 499 }, { codigo: 'C-213', cantidad: 210, kcal: 305 }, { codigo: 'C-121', cantidad: 100, kcal: 100 }] }
      ]
    },
    {
      tipo: 'TRANSICION',
      tiposCaloricos: [
        { calorico: 'Hipercalórico', leches: [{ codigo: 'T-167', cantidad: 180, kcal: 806 }, { codigo: 'T-213', cantidad: 210, kcal: 760 }, { codigo: 'T-121', cantidad: 100, kcal: 700 }] },
        { calorico: 'Normocalórico', leches: [{ codigo: 'T-167', cantidad: 180, kcal: 699 }, { codigo: 'T-213', cantidad: 210, kcal: 597 }, { codigo: 'T-121', cantidad: 100, kcal: 500 }] },
        { calorico: 'Hipocalórico', leches: [{ codigo: 'T-167', cantidad: 180, kcal: 499 }, { codigo: 'T-213', cantidad: 210, kcal: 305 }, { codigo: 'T-121', cantidad: 100, kcal: 100 }] }
      ]
    },
    {
      tipo: 'MADURA',
      tiposCaloricos: [
        { calorico: 'Hipercalórico', leches: [{ codigo: 'M-167', cantidad: 180, kcal: 806 }, { codigo: 'M-213', cantidad: 210, kcal: 760 }, { codigo: 'M-121', cantidad: 100, kcal: 700 }] },
        { calorico: 'Normocalórico', leches: [{ codigo: 'M-167', cantidad: 180, kcal: 699 }, { codigo: 'M-213', cantidad: 210, kcal: 597 }, { codigo: 'M-121', cantidad: 100, kcal: 500 }] },
        { calorico: 'Hipocalórico', leches: [{ codigo: 'M-167', cantidad: 180, kcal: 499 }, { codigo: 'M-213', cantidad: 210, kcal: 305 }, { codigo: 'M-121', cantidad: 100, kcal: 100 }] }
      ]
    }
  ];

  constructor(private platform: Platform, private navCtrl: NavController) {}

  ngOnInit() {
    this.detectDevice();
  }

  detectDevice() {
    const width = this.platform.width();
    if (width < 768) {
      this.isMobile = true;
    } else if (width >= 768 && width <= 1024) {
      this.isTablet = true;
    } else {
      this.isDesktop = true;
    }
  }

  regresar() {
    this.navCtrl.navigateBack('/almacen'); // Reemplaza '/almacen' con la ruta correcta
  }
}