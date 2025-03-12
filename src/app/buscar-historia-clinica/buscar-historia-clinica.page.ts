import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-buscar-historia-clinica',
  templateUrl: './buscar-historia-clinica.page.html',
  styleUrls: ['./buscar-historia-clinica.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule]
})
export class BuscarHistoriaClinicaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
