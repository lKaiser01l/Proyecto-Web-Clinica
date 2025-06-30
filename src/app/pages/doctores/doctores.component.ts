import { Component } from '@angular/core';
import { HeaderComponent } from '../compartido/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../compartido/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctores',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent {

  /* Texto escrito en el buscador */
  terminoBusqueda: string = '';

  /* Letra seleccionada en la barra del abecedario */
  letraSeleccionada: string = '';

  /* Arreglo con todo el abecedario */
  abecedario: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  /* Lista completa de doctores */
  doctores = [
    { nombre: 'Ana Torres',    especialidad: 'Pediatría'    },
    { nombre: 'Beto Suárez',   especialidad: 'Neurología'   },
    { nombre: 'Carlos Mendoza', especialidad: 'Cardiología'  },
    { nombre: 'Diana López',   especialidad: 'Dermatología' },
    { nombre: 'Elena Chávez',  especialidad: 'Ginecología'  }
  ];

  /* Lista que se muestra tras aplicar filtros */
  doctoresFiltrados = [...this.doctores];

  /* Filtra por texto y letra seleccionada */
  filtrarDoctores(): void {
    const termino = this.terminoBusqueda.trim().toLowerCase();

    this.doctoresFiltrados = this.doctores.filter(d =>
      d.nombre.toLowerCase().includes(termino) ||
      d.especialidad.toLowerCase().includes(termino)
    );

    if (this.letraSeleccionada) {
      this.doctoresFiltrados = this.doctoresFiltrados.filter(d =>
        d.nombre.toLowerCase().startsWith(this.letraSeleccionada.toLowerCase())
      );
    }
  }

  /* Filtrar por letra inicial */
  filtrarPorLetra(letra: string): void {
    this.letraSeleccionada = letra;

    if (this.terminoBusqueda) {
      this.filtrarDoctores();
    } else {
      this.doctoresFiltrados = this.doctores.filter(d =>
        d.nombre.toLowerCase().startsWith(letra.toLowerCase())
      );
    }
  }

  /* Mostrar todos los doctores (sin filtro por letra) */
  mostrarTodos(): void {
    this.letraSeleccionada = '';
    this.filtrarDoctores();
  }
}
