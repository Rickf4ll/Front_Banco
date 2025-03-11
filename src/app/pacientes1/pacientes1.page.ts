import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { ChangeDetectionStrategy} from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pacientes1',
  templateUrl: './pacientes1.page.html',
  styleUrls: ['./pacientes1.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,  // <-- Asegúrate de incluir esto
    IonicModule
  ]
})
export class Pacientes1Page implements OnInit {
  
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  input5: string = '';
  input6: string = '';
  input7: string = '';
  input8: string = '';
  input9: string='';
  input10: string = '';
  input11: string = '';
  input12: string = '';
  input13: string = '';
  input14: string = '';
  input15: string = '';
  input16: string = '';

  constructor() { }

  ngOnInit() {
  }
}
