import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-crear-historia-clinica',
  templateUrl: './crear-historia-clinica.page.html',
  styleUrls: ['./crear-historia-clinica.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CrearHistoriaClinicaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
