import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { 
  IonSelectOption, 
  IonDatetime, 
  IonButton 
} from '@ionic/angular/standalone';
import { NgApexchartsModule } from 'ng-apexcharts';



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    IonSelectOption, IonDatetime, IonButton, 
    NgApexchartsModule,
  ]
})
export class ReportesPage implements OnInit {
  selectedTipoBebe: string = '';
  selectedTiempo: string = '';
  selectedTipoLeche: string = '';

  // Variables para almacenar datos de estadísticas
  estadisticasTipoBebe: any = null;
  estadisticasTiempo: any = null;
  estadisticasTipoLeche: any = null;
  router: any;

  constructor() { }

  ngOnInit() {
  }

  onSelectChange(event: any, type: string) {
    const value = event.detail.value;
    switch (type) {
      case 'tipoBebe':
        this.selectedTipoBebe = value;
        this.estadisticasTipoBebe = this.simularDatosDesdeBackend('tipoBebe', value);
        break;
      case 'tiempo':
        this.selectedTiempo = value;
        this.estadisticasTiempo = this.simularDatosDesdeBackend('tiempo', value);
        break;
      case 'tipoLeche':
        this.selectedTipoLeche = value;
        this.estadisticasTipoLeche = this.simularDatosDesdeBackend('tipoLeche', value);
        break;
      default:
        break;
    }
  }

  simularDatosDesdeBackend(tipo: string, valor: string): any {
    // Simula la obtención de datos desde el backend
    // Aquí puedes reemplazar esta lógica con una llamada a tu API o servicio
    switch (tipo) {
      case 'tipoBebe':
        return { titulo: `Estadísticas para ${valor}`, data: [70, 20, 10] }; // Datos de ejemplo
      case 'tiempo':
        return { titulo: `Estadísticas para ${valor}`, data: [50, 30, 20] };
      case 'tipoLeche':
        return { titulo: `Estadísticas para ${valor}`, data: [30, 40, 30] };
      default:
        return null;
    }
  }

  regresar() {
    this.router.navigate(['/almacen']);
  }

  limpiar() {
    this.selectedTipoBebe = '';
    this.selectedTiempo = '';
    this.selectedTipoLeche = '';
    this.estadisticasTipoBebe = null;
    this.estadisticasTiempo = null;
    this.estadisticasTipoLeche = null;
    console.log('Limpiar');
  }
}