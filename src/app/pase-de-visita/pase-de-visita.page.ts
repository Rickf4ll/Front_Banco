import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-pase-de-visita',
  templateUrl: './pase-de-visita.page.html',
  styleUrls: ['./pase-de-visita.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    MatCardModule,MatToolbarModule,MatIconModule],
  
})
export class PaseDeVisitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
