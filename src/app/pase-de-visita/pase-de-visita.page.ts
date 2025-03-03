import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import {MatRadioModule} from '@angular/material/radio';
import {FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import {MatSelectModule} from '@angular/material/select';
import { RouterLink } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';

// Formato personalizado: día/mes/año
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
interface Contenido {
  value: string;
  viewValue: string;
}
interface Via {
  value: string;
  viewValue: string;
}
interface Area {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-pase-de-visita',
  templateUrl: './pase-de-visita.page.html',
  styleUrls: ['./pase-de-visita.page.scss'],
  standalone: true,
  providers: [
    // Usa el MomentDateAdapter en lugar del NativeDateAdapter
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  imports: [IonButton, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule,
    RouterLink,
    MatProgressBarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class PaseDeVisitaPage implements OnInit {
  // Se asigna la fecha actual
  contenido = new FormControl('');
  contenidos: Contenido[] = [
    {value: 'Hipercalórico-0', viewValue: 'Hipercalórico'},
    {value: 'Normocalórico-1', viewValue: 'Normocalórico'},
    {value: 'Hipocalórico-2', viewValue: 'Hipocalórico'},
  ];
  via = new FormControl('');
  vias: Via[] = [
    {value: 'SOG-0', viewValue: 'SOG'},
    {value: 'SUCCIÓN-1', viewValue: 'SUCCIÓN'},
    {value: 'CARRILLO-2', viewValue: 'CARRILLO'},
  ];
  area = new FormControl('');
  areas: Area[] = [
    {value: 'UCIN-0', viewValue: 'UCIN'},
    {value: 'UCIN Quirúrgico-1', viewValue: 'UCIN Quirúrgico'},
    {value: 'Engorde-2', viewValue: 'Engorde'},
    {value: 'Intermedio-3', viewValue: 'Intermedio'},
  ];
  today: Date = new Date();
 //validar campos

  ngOnInit() { }
}
