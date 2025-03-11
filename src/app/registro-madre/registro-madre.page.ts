import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-registro-madre',
  templateUrl: './registro-madre.page.html',
  styleUrls: ['./registro-madre.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroMadrePage implements OnInit {
  archivos: File[] = [];  // Almacena los archivos seleccionados
  previsualizacion: string | null = null;  // URL de vista previa

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  capturarFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const archivo = input.files[0];

      // Validar que sea una imagen
      if (!archivo.type.startsWith('image/')) {
        alert('Solo se permiten imágenes.');
        return;
      }

      this.archivos = [archivo];  // Solo permite una imagen
      this.previsualizarImagen(archivo);
    }
  }

  previsualizarImagen(archivo: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = () => {
      this.previsualizacion = reader.result as string;
    };
  }

  subirArchivo(): void {
    if (this.archivos.length === 0) {
      alert('No hay archivos para subir.');
      return;
    }

    try {
      const formulario = new FormData();
      formulario.append('archivo', this.archivos[0]);

      console.log('Archivo listo para subir:', this.archivos[0]);

      alert('Imagen subida correctamente.');

      // Opcional: Limpiar después de subir
      this.archivos = [];
      this.previsualizacion = null;
    } catch (error) {
      console.error('Error al subir el archivo', error);
    }
  }
  goBack() {
    this.navCtrl.back(); // Regresa a la página anterior
  }
}
