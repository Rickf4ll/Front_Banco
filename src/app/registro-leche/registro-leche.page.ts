import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-leche',
  templateUrl: './registro-leche.page.html',
  styleUrls: ['./registro-leche.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroLechePage implements OnInit {
  tiposLeche: string[] = ['Calostro', 'Transición', 'Madura'];
  registros: { numero: number; cantidad: string; hora: string; guardado: boolean }[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarRegistros(); // Cargar registros guardados en localStorage
    if (this.registros.length === 0) {
      this.agregarRegistro(); // Agregar el primer registro solo si no hay datos guardados
    }
  }

  obtenerHoraActual(): string {
    const ahora = new Date();
    return ahora.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  agregarRegistro(): void {
    const nuevoRegistro = {
      numero: this.registros.length + 1,
      cantidad: '',
      hora: this.obtenerHoraActual(),
      guardado: false
    };
    this.registros.push(nuevoRegistro);
    this.guardarRegistrosEnLocalStorage(); // Guardar en localStorage
  }

  guardarRegistros(): void {
    this.registros.forEach(registro => registro.guardado = true);
    this.guardarRegistrosEnLocalStorage();
    alert('Registros guardados correctamente.');
  }

  guardarRegistrosEnLocalStorage(): void {
    localStorage.setItem('registrosLeche', JSON.stringify(this.registros));
  }

  cargarRegistros(): void {
    const registrosGuardados = localStorage.getItem('registrosLeche');
    if (registrosGuardados) {
      this.registros = JSON.parse(registrosGuardados);
    }
  }
}
