import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonImg } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-dispensacion',
  templateUrl: './dispensacion.page.html',
  styleUrls: ['./dispensacion.page.scss'],
  standalone: true,
  imports: [
    IonImg, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink,
    MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatTableModule, MatRadioModule, CommonModule
  ],
})
export class DispensacionPage implements OnInit {
  // Variables para inputs de texto externos
  externalInput1: string = '';
  externalInput2: string = '';

  // Variables para checkbox de tomas
  toma1 = false;
  toma2 = false;
  toma3 = false;
  toma4 = false;
  toma5 = false;
  toma6 = false;
  toma7 = false;
  toma8 = false;
  toma9 = false;
  toma10 = false;
  toma11 = false;
  toma12 = false;

  // Variables para otros checkbox
  lecheAutologa = false;
  npo = false;
  lmd = false;
  formulaTermino1 = false;
  formulaTermino2 = false;

  // Variables para alertas (cada una controla la visualización de un cuadro de alerta)
  showAlertPasteurizada = false; // Leche Pasteurizada
  showAlertAutologaPasteurizada = false; // Leche Autologa + Pasteurizada
  showAlertPasteurizadaFormula1 = false; // Leche Pasteurizada + Formula 1
  showAlertPasteurizadaFormula4 = false; // Leche Pasteurizada + Formula 4

  // Variables para código y cantidades
  codepasteurizada: string = '';
  quantity: number | null = null;
  quantity1: number | null = null;

  // Variable para deshabilitar checkbox cuando se registra alguna acción (según la lógica)
  isCheckboxDisabled: boolean = false;

  // Configuración de la tabla de leches disponibles
  displayedColumns: string[] = ['columna1', 'columna2', 'columna3'];
  dataSource = new MatTableDataSource<{ columna1: string, columna2: string, columna3: string }>([]);

  constructor() {}

  ngOnInit() {
    // Datos de ejemplo para la tabla
    this.dataSource.data = [
      { columna1: '001', columna2: '500 ml', columna3: '300 kcal' },
      { columna1: '002', columna2: '300 ml', columna3: '200 kcal' },
    ];

    // Asignación de valores desde una fuente externa (puedes reemplazar estos valores con una llamada a un servicio)
    this.externalInput1 = 'Valor desde fuente externa 1';
    this.externalInput2 = 'Valor desde fuente externa 2';
  }

  // Muestra/oculta la alerta según el tipo de leche seleccionado
  toggleAlert(type: string) {
    this.resetAlerts(); // Oculta todas las alertas antes de mostrar la que corresponde
    switch (type) {
      case 'pasteurizada':
        this.showAlertPasteurizada = !this.showAlertPasteurizada;
        break;
      case 'autologaPasteurizada':
        this.showAlertAutologaPasteurizada = !this.showAlertAutologaPasteurizada;
        break;
      case 'pasteurizadaFormula1':
        this.showAlertPasteurizadaFormula1 = !this.showAlertPasteurizadaFormula1;
        break;
      case 'pasteurizadaFormula4':
        this.showAlertPasteurizadaFormula4 = !this.showAlertPasteurizadaFormula4;
        break;
    }
  }

  // Registra el código (y puede ampliarse para registrar otros datos)
  registerCode(type: string) {
    if (this.codepasteurizada.trim()) {
      // Ejemplo de mensaje de registro, se pueden incluir más datos según se requiera
      alert(
        'Código registrado: ' +
          this.codepasteurizada +
          ' - Cantidad: ' +
          (this.quantity !== null ? this.quantity : 'N/A') +
          ' - Tipo: ' +
          type
      );
      this.resetAlerts();
      this.codepasteurizada = '';
      this.isCheckboxDisabled = true;
    } else {
      alert('Por favor ingrese un código antes de registrar.');
    }
  }

  // Resetea (oculta) todas las alertas
  resetAlerts() {
    this.showAlertPasteurizada = false;
    this.showAlertAutologaPasteurizada = false;
    this.showAlertPasteurizadaFormula1 = false;
    this.showAlertPasteurizadaFormula4 = false;
  }

  // Método ejecutado al cambiar el estado del checkbox de NPO
  onNpoChange() {
    // La deshabilitación de las tomas se controla en el HTML con [disabled]="npo"
    // Puedes agregar lógica adicional si fuera necesaria al cambiar el valor de npo.
  }
}
