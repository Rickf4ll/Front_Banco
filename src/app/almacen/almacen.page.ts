import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Platform, NavController } from '@ionic/angular';
import { IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';


@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.page.html',
  styleUrls: ['./almacen.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, CommonModule, IonGrid, IonRow, IonCol, FormsModule]
})
export class AlmacenPage implements OnInit {
  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktop: boolean = false;

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

  registropasteurizado() {
    this.navCtrl.navigateForward('/registropasteurizado');
  }

  registroautologa() {
    this.navCtrl.navigateForward('/registroautologa');
  }

  lechesdisponibles() {
    this.navCtrl.navigateForward('/lechesdisponibles');
  }

  alertas() {
    this.navCtrl.navigateForward('/alertas');
  }

  regresar() {
    this.navCtrl.navigateBack('/almacen');
  }
}