import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonImg } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dispensacion',
  templateUrl: './dispensacion.page.html',
  styleUrls: ['./dispensacion.page.scss'],
  standalone: true,
  imports: [
    IonImg, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink,
    MatFormField, MatInputModule, MatIconModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule,MatTableModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DispensacionPage implements OnInit {
  private readonly _formBuilder = new FormBuilder();

  // Opciones para los tipos de leche
  readonly milkOptions: { key: string, label: string }[] = [
    { key: 'leche_autologa', label: 'Leche Autóloga' },
    { key: 'lmd_lactancia_materna_directa', label: 'LMD (lactancia materna directa)' },
    { key: 'leche_pasteurizada', label: 'Leche pasteurizada' },
    { key: 'leche_autologa_pasteurizada', label: 'Leche autóloga + pasteurizada' },
    { key: 'leche_autologa_formula', label: 'Leche autóloga + fórmula' },
    { key: 'leche_pasteurizada_formula_4', label: 'Leche pasteurizada + fórmula 4' },
    { key: 'formula_a_termino_1', label: 'Fórmula a término 1' },
    { key: 'formula_a_termino_2', label: 'Fórmula a término 2' }
  ];
readonly calostro: { key: string, label: string }[] = [
    { key: 'autologa', label: 'Autologa' },
    { key: 'pasteurizada_1', label: 'Pasteurizada' }]
  // Opciones para los horarios de tomas
  readonly timeSlots: string[] = [
    "12:00 pm", "2:00 pm", "4:00 pm", "6:00 pm", "8:00 pm", "10:00 pm",
    "12:00 am", "2:00 am", "4:00 am", "6:00 am", "8:00 am", "10:00 am"
  ];

  // FormGroup para los tipos de leche
  readonly lecheForm: FormGroup;

  // FormGroup para los horarios de tomas
  readonly toppingsForm: FormGroup;
  readonly calostroForm: FormGroup;
displayedColumns: string[] = ['columna1', 'columna2','columna3'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() {
    // Inicializa el FormGroup para los tipos de leche
    this.lecheForm = this._formBuilder.group(
      this.milkOptions.reduce((acc, option) => ({ ...acc, [option.key]: false }), {})
    );

    // Inicializa el FormGroup para los horarios de tomas
    this.toppingsForm = this._formBuilder.group(
      this.timeSlots.reduce((acc, time) => ({ ...acc, [time]: false }), {})
    );
    this.calostroForm = this._formBuilder.group(
      this.calostro.reduce((acc, option) => ({ ...acc, [option.key]: false }), {})
    );
  }

  ngOnInit() {
  }
}
const ELEMENT_DATA=[
  { columna1: '', columna2: '', columna3: '' },
  
]
