import { Component } from '@angular/core';
import { HeaderComponent } from '../compartido/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../compartido/footer/footer.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    { nombre: 'Área Diferenciada', imagen: 'assets/Imagenes-Inicio/Servicios/AreaDiferenciada.png', descripcion: 'En cada una de nuestras sedes se ha implementado un área independiente para tratar casos respiratorios, así como para la aplicación de pruebas de descarte de COVID-19 siguiendo estrictos protocolos de bioseguridad. Seguridad y confianza para la aplicación de pruebas de descarte en nuestras instalaciones, así como en el tratamiento médico oportuno para casos positivos. Contamos con Emergencia, Hospitalización y UCI diferenciada.' },
    { nombre: 'Laboratorio', imagen: 'assets/Imagenes-Inicio/Servicios/Laboratorio.png', descripcion: 'Nuestro servicio de laboratorio garantiza calidad, rapidez y confiabilidad; Clínicas Limatambo cuenta con equipamiento de última tecnología, con una alta capacidad para procesar gran cantidad de exámenes de alta y baja complejidad, a cargo de un staff de profesionales que avalan una atención de primer nivel en un ambiente apropiado, para mayor comodidad y confianza de nuestros pacientes.' },
    { nombre: 'Terapia Física y Rehabilitación', imagen: 'assets/Imagenes-Inicio/Servicios/terapia fisica y rehabilitacion.png', descripcion: 'En nuestro Centro de Terapia Física y Rehabilitación combinamos un alto nivel en tecnología, con las mejores prácticas de fisioterapia y una atención personalizada para garantizar la recuperación física, funcional y el bienestar de todos nuestros pacientes.' },
    { nombre: 'Centro de vacunación Internacional', imagen: 'assets/Imagenes-Inicio/Servicios/centro de vacunacion.png', descripcion: 'Contamos con autorización del Ministerio de Salud y certificación como Centro de Vacunación Internacional. Trabajamos con los laboratorios más reconocidos del país y a nivel mundial. Contamos con un sistema especial para mantener la cadena de frío y la capacidad para contar con un variado stock de vacunas disponibles. Tenemos 31 años de experiencia y personal altamente calificado para brindarte la orientación y atención personalizada y cordial, que merecen tú y tu familia. Nuestros ambientes de atención cumplen con todos los protocolos de bioseguridad para una atención segura.' },
    { nombre: 'Centro de Maternidad', imagen: 'assets/Imagenes-Inicio/Servicios/centro de maternidad.png', descripcion: 'Nuestra área de maternidad está conformada por un equipo de profesionales altamente calificados y sobre todo comprometidos en brindar la mejor atención en uno de los momentos más importantes: el nacimiento de tu bebé.' },
    { nombre: 'Centro de Imagenes', imagen: 'assets/Imagenes-Inicio/Servicios/centro de imagenes.png', descripcion: 'El centro de imágenes de la Clínica Limatambo ofrece una amplia gama de exámenes diagnósticos utilizando tecnología avanzada para diversas especialidades médicas. Realizan Tomografías con un equipo General Electric multicorte para imágenes de alta calidad y baja radiación, permitiendo reconstrucciones 3D. También ofrecen diversas Ecografías (generales, musculoesqueléticas, 4D-5D para gestantes y Doppler) que usan ondas sin radiación.' },
    { nombre: 'Unidad de Cuidados Intensivos', imagen: 'assets/Imagenes-Inicio/Servicios/centro de cuidados intensivos.png', descripcion: 'El área de cuidados intensivos o UCI, es el área en donde se brindan cuidados de alta complejidad para pacientes graves y con alto riesgo, que ven afectada su supervivencia por alguna enfermedad potencialmente reversible. Estos pacientes requieren monitoreo constante en un ambiente controlado y con cuidados especiales, para los que contamos con ambientes individualizados especialmente diseñados para una mejor atención y privacidad del paciente crítico. Nuestro equipo de profesionales trabaja las 24 horas del día, los 365 días del año para poder brindar a nuestros pacientes la atención que requieren. Contamos con médicos intensivistas calificados y un equipo de enfermería especializada, con experiencia en el cuidado del paciente crítico. ' },
    { nombre: 'Centro Quirúrgico', imagen: 'assets/Imagenes-Inicio/Servicios/centro quirurgico.png', descripcion: 'Este servicio brinda atención médica quirúrgica con un staff multidisciplinario y de amplia trayectoria, con los más altos estándares de calidad; contamos con 31 años de experiencia que nos respaldan. En esta área realizamos diversos procedimientos quirúrgicos alta y baja complejidad, de distintas especialidades, programados o de urgencia. Contamos con equipamiento médico de última tecnología y rigurosas medidas de bioseguridad, con un atención integral y centrada en nuestros pacientes.' }
  ];

  servicioSeleccionado: any = null;

  abrirModal(servicio: any) {
    this.servicioSeleccionado = servicio;
  }

  cerrarModal() {
    this.servicioSeleccionado = null;
  }
}
