import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-actualizar-historia-clinica',
  templateUrl: './actualizar-historia-clinica.page.html',
  styleUrls: ['./actualizar-historia-clinica.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ActualizarHistoriaClinicaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
