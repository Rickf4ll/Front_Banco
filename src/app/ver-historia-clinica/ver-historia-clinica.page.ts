import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ver-historia-clinica',
  templateUrl: './ver-historia-clinica.page.html',
  styleUrls: ['./ver-historia-clinica.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule]
})
export class VerHistoriaClinicaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
