<<<<<<< HEAD
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
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; // 📌 Importa el plugin de la cámara

@Component({
  selector: 'app-registro-madre',
  standalone: true,
  templateUrl: './registro-madre.page.html',
  styleUrls: ['./registro-madre.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class RegistroMadrePage {
  formulario = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    apellidoP: new FormControl(''),
    apellidoM: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    telefono: new FormControl(''),
    talla: new FormControl(''),
    direccion: new FormControl(''),
    transfusion: new FormControl(''),
    consumoCigarros: new FormControl(''),
    consumoDrogas: new FormControl(''),
    consumoMedicamentos: new FormControl(''),
    enfermedades: new FormControl(''),
    pruebaSerologica: new FormControl(''),
    pruebaSifilis: new FormControl(''),
    pruebaHepatitis: new FormControl(''),
    pruebaVIH: new FormControl(''),
    examenHemoglobinas: new FormControl(''),
    aceptaDonar: new FormControl(''),
    estaApta: new FormControl('')
  });

  imagenesSeleccionadas: string[] = []; // Almacenar imágenes en base64
  images: string[] = [];

  async tomarFoto() {
    const imagen = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    if (imagen?.dataUrl) {
      this.imagenesSeleccionadas.push(imagen.dataUrl);
    }
  }

  async seleccionarDesdeGaleria() {
    const imagen = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });

    if (imagen?.dataUrl) {
      this.imagenesSeleccionadas.push(imagen.dataUrl);
    }
  }

  eliminarImagen(index: number) {
    this.imagenesSeleccionadas.splice(index, 1);
  }

  onSubmit() {
    console.log('Datos del formulario:', this.formulario.value);
    console.log('Imágenes seleccionadas:', this.imagenesSeleccionadas);
  }

  resetear() {
    this.formulario.reset();
    this.imagenesSeleccionadas = []; // También limpiamos las imágenes
  }
  openImageInNewTab(imageUrl: string) {
    window.open(imageUrl, '_blank'); // 📌 Abre la imagen en una nueva pestaña
  }
  
>>>>>>> 3af2b3d7d3a1133a472ec90df24c55292df706d5
}
