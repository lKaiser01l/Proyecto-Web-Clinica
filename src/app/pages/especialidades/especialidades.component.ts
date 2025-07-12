import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../compartido/header/header.component';
import { FooterComponent } from '../compartido/footer/footer.component';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent ],
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {
    ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  especialidades = [
    { nombre: 'Pediatría', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/pediatria.webp', descripcion: 'Atención médica integral a niños y adolescentes.' },
    { nombre: 'Cardiología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/cardiologia.jpg', descripcion: 'Diagnóstico y tratamiento de enfermedades del corazón.' },
    { nombre: 'Medicina Interna', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/medicina-interna.jpg', descripcion: 'Manejo integral de enfermedades en adultos.' },
    { nombre: 'Reumatología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/reumatologia.jpg', descripcion: 'Tratamiento de enfermedades articulares y autoinmunes.' },
    { nombre: 'Urología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/urologia.jpg', descripcion: 'Diagnóstico de problemas del aparato urinario y reproductor masculino.' },
    { nombre: 'Psicología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/psicologia.jpg', descripcion: 'Apoyo emocional, terapia individual y de pareja.' },
    { nombre: 'Endocrinología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/Endocrinologia.jpg', descripcion: 'Tratamiento de problemas hormonales y metabólicos.' },
    { nombre: 'Hematología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/hematologia.jpg', descripcion: 'Estudio y tratamiento de enfermedades de la sangre.' },
    { nombre: 'Otorrinolaringología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/otorrinolaringologia.jpg', descripcion: 'Tratamiento de oídos, nariz y garganta.' },
    { nombre: 'Dermatología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/dermatologia.avif', descripcion: 'Diagnóstico y tratamiento de enfermedades de la piel.' },
    { nombre: 'Neumología', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/neumologia.jpeg', descripcion: 'Tratamiento de enfermedades pulmonares y respiratorias.' },
    { nombre: 'Nutrición', imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/nutricion.jpg', descripcion: 'Orientación nutricional y planes alimenticios personalizados.' }
  ];

  especialidadSeleccionada: any = null;

  abrirModal(especialidad: any) {
    this.especialidadSeleccionada = especialidad;
  }

  cerrarModal() {
    this.especialidadSeleccionada = null;
  }
}
