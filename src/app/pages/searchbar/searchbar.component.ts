import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../compartido/footer/footer.component";
import { HeaderComponent } from "../compartido/header/header.component";

interface BlogDato {
  id: number;
  title: string;
  description: string;
  author: string; 
  image: string;
  category: string;
}

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormsModule, HeaderComponent],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  searchTerm = '';
  selectedCategory = 'Todas';

  blogdatos: BlogDato[] = [
    {
      id: 1,
      title: '¿Cuáles son las áreas de un laboratorio clínico?',
      description: 'La función del análisis de muestras biológicas como sangre, orina, heces y tejidos.',
      author: 'Paola Lazo Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img1.png',
      category: 'Laboratorio',
    },
    {
      id: 2,
      title: '¿Cuándo llevar a los niños a su primera visita al dentista?',
      description: 'La primera visita de los niños al odontólogo.',
      author: 'Claudia Mori torres',
      image: 'assets/Imagenes-Inicio/Blog/img2.png',
      category: 'Odontología',
    },
    {
      id: 3,
      title: '¿Cómo es el desarrollo del lenguaje del bebé en sus primeros meses de nacido?',
      description: 'La comunicación de los bebés y sus primeras palabras.',
      author: 'Maria Rojas Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img3.png',
      category: 'Pediatría',
    },
{
      id: 4,
      title: '¿Cómo amamantar a mi bebé?',
      description: 'Algunos consejos para amamantar adecuadamente a nuestro bebé.',
      author: 'Crisogono Rubio Valenzuela',
      image: 'assets/Imagenes-Inicio/Blog/img4.png',
      category: 'Pediatría',
    },
  ];

  categories: string[] = ['Todas', ...new Set(this.blogdatos.map(b => b.category))];

  get filteredDatos() {
    return this.blogdatos.filter(b => {
      const matchesCategory =
        this.selectedCategory === 'Todas' || b.category === this.selectedCategory;
      const matchesSearch =
        b.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        b.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  moreInfo(blogdato: BlogDato) {
    alert(`Más información sobre: ${blogdato.title}\n\n${blogdato.description}\nAutor: ${blogdato.author}`);
  }
  }