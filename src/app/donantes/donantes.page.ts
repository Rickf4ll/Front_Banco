import { ChangeDetectionStrategy,Component, isStandalone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput } from '@ionic/angular/standalone';
import {IonButton} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-donantes',
  templateUrl: './donantes.page.html',
  styleUrls: ['./donantes.page.scss'],
  standalone: true,
  imports: [IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,
    MatCardModule, RouterLink, MatFormField, MatInputModule],
})
export class DonantesPage implements OnInit {
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
