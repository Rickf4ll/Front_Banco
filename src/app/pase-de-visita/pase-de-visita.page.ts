<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export const MY_DATE_FORMATS = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: { dateInput: 'DD/MM/YYYY', monthYearLabel: 'MMM YYYY', dateA11yLabel: 'LL', monthYearA11yLabel: 'MMMM YYYY' },
};

interface Contenido { value: string; viewValue: string; }
interface Via { value: string; viewValue: string; }
interface Area { value: string; viewValue: string; }

=======
import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
>>>>>>> 3af2b3d7d3a1133a472ec90df24c55292df706d5
@Component({
  selector: 'app-pase-de-visita',
  templateUrl: './pase-de-visita.page.html',
  styleUrls: ['./pase-de-visita.page.scss'],
  standalone: true,
<<<<<<< HEAD
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  imports: [
    IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatMomentDateModule,
    MatRadioModule, MatSelectModule, RouterLink, MatProgressBarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PaseDeVisitaPage implements OnInit {
  form: FormGroup;
  today: Date = new Date();

  contenidos: Contenido[] = [
    { value: 'Hipercalórico', viewValue: 'Hipercalórico' },
    { value: 'Normocalórico', viewValue: 'Normocalórico' },
    { value: 'Hipocalórico', viewValue: 'Hipocalórico' },
  ];
  
  vias: Via[] = [
    { value: 'SOG', viewValue: 'SOG' },
    { value: 'SUCCIÓN', viewValue: 'SUCCIÓN' },
    { value: 'CARRILLO', viewValue: 'CARRILLO' },
  ];

  areas: Area[] = [
    { value: 'UCIN', viewValue: 'UCIN' },
    { value: 'UCIN Quirúrgico', viewValue: 'UCIN Quirúrgico' },
    { value: 'Engorde', viewValue: 'Engorde' },
    { value: 'Intermedio', viewValue: 'Intermedio' },
  ];

  constructor() {
    this.form = new FormGroup({
      fecha: new FormControl(new Date(), Validators.required),
      idPaciente: new FormControl('', Validators.required),
      llamadaTelefono: new FormControl('', Validators.required),
      pesoAnterior: new FormControl('', Validators.required),
      pesoActual: new FormControl('', Validators.required),
      deltaPeso: new FormControl('', Validators.required),
      nroTomas: new FormControl('', Validators.required),
      cantidadToma: new FormControl('', Validators.required),
      tipoLeche: new FormControl('', Validators.required),
      contenidoEnergetico: new FormControl('', Validators.required),
      viaAdministracion: new FormControl('', Validators.required),
      calostroTerapia: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      npo: new FormControl('', Validators.required),
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.form.valid) {
      console.log('Datos del formulario:', this.form.value);
      alert('Registro exitoso');
    } else {
      alert('Complete todos los campos');
    }
  }
=======
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    MatCardModule,MatToolbarModule,MatIconModule],
  
})
export class PaseDeVisitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 3af2b3d7d3a1133a472ec90df24c55292df706d5
}
