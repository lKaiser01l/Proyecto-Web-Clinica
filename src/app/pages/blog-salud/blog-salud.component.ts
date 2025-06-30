import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Reclamo {
  texto: string;
  fecha: string;
}

@Component({
  selector: 'app-blog-salud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-salud.component.html',
  styleUrls: ['./blog-salud.component.css']
})
export class BlogSaludComponent {
  nuevoTexto: string = '';
  reclamos: Reclamo[] = [];

  enviarReclamo(): void {
    const texto = this.nuevoTexto.trim();
    if (texto.length < 5) {
      alert('El reclamo debe tener al menos 5 caracteres.');
      return;
    }

    this.reclamos.push({
      texto: texto,
      fecha: new Date().toLocaleString()
    });

    this.nuevoTexto = '';
  }

  eliminarReclamo(i: number): void {
    if (confirm('¿Eliminar este reclamo?')) {
      this.reclamos.splice(i, 1);
    }
  }

  editarReclamo(i: number): void {
    const editado = prompt('Editar reclamo:', this.reclamos[i].texto);
    if (editado !== null) {
      const limpio = editado.trim();
      if (limpio.length < 5) {
        alert('Debe tener al menos 5 caracteres.');
        return;
      }
      this.reclamos[i].texto = limpio;
      this.reclamos[i].fecha = new Date().toLocaleString();
    }
  }
}
