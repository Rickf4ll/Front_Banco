import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface RegistroLeche {
  id: number;
  cantidad: string;
  hora: string | null;
  fecha: string | null;
  guardado: boolean;
}

@Component({
  selector: 'app-registro-autologa',
  templateUrl: './registroautologa.page.html',
  styleUrls: ['./registroautologa.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class RegistroAutologaPage implements OnInit {
  registros: RegistroLeche[] = [];
  siguienteId = 1;
  dniMadre: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.agregarFila();
  }

  agregarFila(): void {
    this.registros.push({
      id: this.siguienteId++,
      cantidad: '',
      hora: null,
      fecha: null,
      guardado: false,
    });
  }

  buscar(): void {
    console.log('Buscando datos...', this.dniMadre);
  }

  guardar(id: number): void {
    const registro = this.registros.find((r) => r.id === id);
    if (registro) {
      if (!registro.cantidad.trim()) {
        console.warn(`El registro ${id} no tiene una cantidad válida.`);
        return;
      }

      const now = new Date();
      const hours = this.pad(now.getHours());
      const minutes = this.pad(now.getMinutes());
      registro.hora = `${hours}:${minutes}`;

      const year = now.getFullYear();
      const month = this.pad(now.getMonth() + 1); // getMonth() es base 0
      const day = this.pad(now.getDate());
      registro.fecha = `${year}-${month}-${day}`;

      registro.guardado = true;
      console.log(`Guardando registro ${id}`, registro);
    }
  }

  pad(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }

  limpiarBusqueda(): void {
    this.dniMadre = '';
    console.log('Búsqueda limpiada');
  }

  regresar(): void {
    this.router.navigate(['/almacen']);
  }

  registrar(): void {
    console.log('Registrando todos los datos...', this.registros);
  }
}