import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { 
  IonContent, IonButton, IonGrid, IonRow, IonCol, 
  IonSelect, IonSelectOption, IonInput, IonItem, IonLabel, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-pasteurizado',
  templateUrl: './registropasteurizado.page.html',
  styleUrls: ['./registropasteurizado.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonButton, IonGrid, IonRow, IonCol, 
    IonSelect, IonSelectOption, IonInput, IonItem, IonLabel, 
    IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class RegistroPasteurizadoPage {
  
  opselec: string = '';
  impcode: string = '';
  impcant: number | null = null;
  impkal: number | null = null;
  impcrem: number | null = null;
  impgra: number | null = null;
  impador: string = '';

  constructor(private navCtrl: NavController, private router: Router) {}

  registrar() {
    const registro = {
      opselec: this.opselec,
      impcode: this.impcode,
      impcant: this.impcant,
      impkal: this.impkal,
      impcrem: this.impcrem,
      impgra: this.impgra,
      impador: this.impador
    };

    console.log('✅ Registro agregado:', registro);
    alert('✅ Registro guardado exitosamente.');

    // Limpiar los campos del formulario
    this.opselec = '';
    this.impcode = '';
    this.impcant = null;
    this.impkal = null;
    this.impcrem = null;
    this.impgra = null;
    this.impador = '';
  }

  regresar() {
    this.router.navigate(['/almacen']);
  }
}