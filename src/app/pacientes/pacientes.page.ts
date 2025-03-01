import { ChangeDetectionStrategy,Component, isStandalone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonButton} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,
    MatCardModule, RouterLink, MatTableModule],
  
})
export class PacientesPage implements OnInit {
  displayedColumns: string[] = ['columna1', 'columna2'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA=[
  { columna1: 'Fila 1, Columna 1', columna2: 'Fila 1, Columna 2' },
  
]

