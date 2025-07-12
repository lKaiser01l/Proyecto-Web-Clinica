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
    { nombre: 'Ana Torres',cmp: '12345', especialidad: 'Pediatría', fotoUrl: 'assets/Imagenes-Inicio/doctores/Doctora1.jpg'   },
    { nombre: 'Felipe Quispe',cmp: '67890', especialidad: 'Cardiología', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctor1.jpg'  },
    { nombre: 'Beto Suárez',cmp: '34567',   especialidad: 'Medicina Interna', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctor8.avif' },
    { nombre: 'Carlos Mendoza',cmp: '26534', especialidad: 'Urología', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctor3.png'  },
    { nombre: 'Diana López',cmp: '90854',   especialidad: 'Psicología', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctora2.avif' },
    { nombre: 'Elena Chávez',cmp: '17246',  especialidad: 'Endocrinología', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctora3.jpg'  },
    { nombre: 'Rolando Soriano',cmp: '39054',  especialidad: 'Hematología', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctor4.png'  },
    { nombre: 'Jorge Herrera',cmp: '82163',  especialidad: 'Otorrrinolaringología', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctor5.png'  },
    { nombre: 'Ariano Cuellar',cmp: '75401',  especialidad: 'Dermatología', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctor6.jpg'  },
    { nombre: 'Aldo Alanya',cmp: '30688',  especialidad: 'Neumología', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctor7.jpg'  },
    { nombre: 'Edson Sosa',cmp: '22691',  especialidad: 'Nutrición', fotoUrl: 'assets/Imagenes-Inicio/doctores/doctor2.png'  }
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
