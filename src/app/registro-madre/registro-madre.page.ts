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
  
}
