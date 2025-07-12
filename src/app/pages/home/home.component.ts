import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../compartido/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../compartido/footer/footer.component';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // CARRUSEL DE IMÁGENES
  imagenes: string[] = [
    'assets/Imagenes-Inicio/Carrusel-inicio/carrusel 1.png',
    'assets/Imagenes-Inicio/Carrusel-inicio/carrusel 2.png',
    'assets/Imagenes-Inicio/Carrusel-inicio/carrusel 3.png'
  ];
  indiceActual = 0;
  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }
  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }
  seleccionar(indice: number) {
    this.indiceActual = indice;
  }
  // ESPECIALIDADES
  especialidades = [
    {
      nombre: 'Pediatría',
      descripcion: 'Cuidado integral de niños y adolescentes',
      imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/pediatria.webp'
    },
    {
      nombre: 'Cardeología',
      descripcion: 'Salud del corazón y sistema circulatorio',
      imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/cardiologia.jpg'
    },
    {
      nombre: 'Medicina Interna',
      descripcion: 'Atención médica para adultos',
      imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/medicina-interna.jpg'
    },
    {
      nombre: 'Reumatología',
      descripcion: 'Enfermedades de articulaciones y músculos',
      imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/reumatologia.jpg'
    },
    {
      nombre: 'Urología',
      descripcion: 'Salud urinaria y reproductiva masculina',
      imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/urologia.jpg'
    },
    {
      nombre: 'Psicología',
      descripcion: 'Bienestar mental y emocional',
      imagen: 'assets/Imagenes-Inicio/Imagenes-Especialidades/psicologia.jpg'
    },
  ];

  // SERVICIOS
  servicios = [
    { nombre: 'Área Diferenciada', imagen: 'assets/Imagenes-Inicio/Servicios/AreaDiferenciada.png' },
    { nombre: 'Laboratorio', imagen: 'assets/Imagenes-Inicio/Servicios/Laboratorio.png' },
    { nombre: 'Terapia Física y Rehabilitación', imagen: 'assets/Imagenes-Inicio/Servicios/terapia fisica y rehabilitacion.png' },
    { nombre: 'Centro de vacunación Internacional', imagen: 'assets/Imagenes-Inicio/Servicios/centro de vacunacion.png' },
    { nombre: 'Centro de Maternidad', imagen: 'assets/Imagenes-Inicio/Servicios/centro de maternidad.png' },
    { nombre: 'Centro de Imagenes', imagen: 'assets/Imagenes-Inicio/Servicios/centro de imagenes.png' },
    { nombre: 'Unidad de Cuidados Intensivos', imagen: 'assets/Imagenes-Inicio/Servicios/centro de cuidados intensivos.png' },
    { nombre: 'Centro Quirúrgico', imagen: 'assets/Imagenes-Inicio/Servicios/centro quirurgico.png' }
  ];


  // ASEGURADORAS
  aseguradoras = [
    { nombre: 'Aseguradora 1', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora1.png' },
    { nombre: 'Aseguradora 2', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora2.png' },
    { nombre: 'Aseguradora 3', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora3.png' },
    { nombre: 'Aseguradora 4', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora4.png' },
    { nombre: 'Aseguradora 5', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora5.png' },
    { nombre: 'Aseguradora 6', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora6.png' },
    { nombre: 'Aseguradora 7', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora7.png' },
    { nombre: 'Aseguradora 8', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora8.png' },
    { nombre: 'Aseguradora 9', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora9.png' },
    { nombre: 'Aseguradora 10', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora10.jpg' },
    { nombre: 'Aseguradora 11', imagen: 'assets/Imagenes-Inicio/Aseguradoras/Aseguradora11.png' },
  ];

  puntos: number[] = [];
  indiceActivo = 0;

  @ViewChild('carrusel') carrusel!: ElementRef;
  
  ngOnInit() {
    setInterval(() => {
      this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
    }, 4000);
  }
  ngAfterViewInit() {
    this.actualizarPuntosCarrusel();
    window.addEventListener('resize', this.actualizarPuntosCarrusel);
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.actualizarPuntosCarrusel);
  }
  actualizarPuntosCarrusel = () => {
    const visibles = this.obtenerVisiblePorPantalla();
    const totalPuntos = Math.ceil(this.aseguradoras.length / visibles);
    this.puntos = Array(totalPuntos).fill(0);

    if (this.indiceActivo >= totalPuntos) {
      this.indiceActivo = totalPuntos - 1;
    }
  };
  moverCarrusel(direccion: 'izquierda' | 'derecha') {
    const carruselEl = this.carrusel.nativeElement as HTMLElement;
    const anchoItem = carruselEl.querySelector('.aseguradora-item')?.clientWidth || 300;
    const visibles = this.obtenerVisiblePorPantalla();
    const scroll = anchoItem * visibles;

    if (direccion === 'derecha') {
      if (this.indiceActivo < this.puntos.length - 1) this.indiceActivo++;
    } else {
      if (this.indiceActivo > 0) this.indiceActivo--;
    }
    carruselEl.scrollTo({
      left: this.indiceActivo * scroll,
      behavior: 'smooth',
    });
  }
  irAPunto(i: number) {
    const carruselEl = this.carrusel.nativeElement as HTMLElement;
    const anchoItem = carruselEl.querySelector('.aseguradora-item')?.clientWidth || 300;
    const visibles = this.obtenerVisiblePorPantalla();
    this.indiceActivo = i;

    carruselEl.scrollTo({
      left: i * visibles * anchoItem,
      behavior: 'smooth',
    });
  }
  obtenerVisiblePorPantalla(): number {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 900) return 2;
    return 4;
  }
}