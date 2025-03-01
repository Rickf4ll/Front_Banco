import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dispensacion',
  templateUrl: './dispensacion.page.html',
  styleUrls: ['./dispensacion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DispensacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
