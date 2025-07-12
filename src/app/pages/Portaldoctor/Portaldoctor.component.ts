import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-salud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Portaldoctor.Component.html',
  styleUrls: ['./Portaldoctor.Component.css']
})
export class PortaldoctorComponent {
  dias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  horas: string[] = [
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00'
  ];

  horarioSeleccionado: { [dia: string]: { [hora: string]: boolean } } = {};
  modoEdicion: boolean = false; // Por defecto en solo lectura

  constructor() {
    this.inicializarHorario();
  }

  inicializarHorario() {
    const datosGuardados = localStorage.getItem('horarioDoctor');
    if (datosGuardados) {
      this.horarioSeleccionado = JSON.parse(datosGuardados);
    } else {
      this.dias.forEach(dia => {
        this.horarioSeleccionado[dia] = {};
        this.horas.forEach(hora => {
          this.horarioSeleccionado[dia][hora] = false;
        });
      });
    }
  }

  guardarHorarioGeneral() {
    localStorage.setItem('horarioDoctor', JSON.stringify(this.horarioSeleccionado));
    alert('Horario general guardado correctamente.');
  }

  resetHorario() {
    if (confirm('¿Estás seguro de que deseas borrar todo el horario?')) {
      this.dias.forEach(dia => {
        this.horas.forEach(hora => {
          this.horarioSeleccionado[dia][hora] = false;
        });
      });
      localStorage.removeItem('horarioDoctor');
    }
  }

  seleccionarTodo(dia: string) {
    this.horas.forEach(hora => {
      this.horarioSeleccionado[dia][hora] = true;
    });
  }

  limpiarDia(dia: string) {
    this.horas.forEach(hora => {
      this.horarioSeleccionado[dia][hora] = false;
    });
  }
}



