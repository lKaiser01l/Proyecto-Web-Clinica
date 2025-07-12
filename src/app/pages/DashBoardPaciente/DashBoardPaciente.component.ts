import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-dashboard-paciente',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  templateUrl: './DashBoardPaciente.component.html',
  styleUrls: ['./DashBoardPaciente.component.css']
})
export class DashBoardPacienteComponent implements OnInit {
  
  especialidades = [
    { nombre: 'Cardiología', doctores: ['Dr. Felipe Quispe'] },
    { nombre: 'Pediatría', doctores: ['Dra. Ana Torres'] },
    { nombre: 'Medicina Interna', doctores: ['Dr. Beto Suárez'] },
    { nombre: 'Urología', doctores: ['Dr. Carlos Mendoza'] },
    { nombre: 'Psicología', doctores: ['Dra. Diana López'] },
    { nombre: 'Endocrinologia', doctores: ['Dra. Elena Chávez'] },
    { nombre: 'Hematología', doctores: ['Dr. Rolando Soriano'] },
    { nombre: 'Otorrinolaringología', doctores: ['Dr. Jorge Herrera'] },
    { nombre: 'Dermatología', doctores: ['Dr. Ariano Cuellar'] },
    { nombre: 'Neumología', doctores: ['Dr. Aldo Alanya'] },
    { nombre: 'Nutrición', doctores: ['Dr. Edson Sosa'] }
  ];

  doctores: string[] = [];
  especialidadSeleccionada = '';
  doctorSeleccionado = '';
  diasDisponibles: string[] = [];
  diaSeleccionado = '';
  horarios: string[] = [];
  horariosReservados: string[] = [];
  horarioSeleccionado = '';
  mostrarModal = false;
  mensajeError = '';

  citas: { dia: string; horario: string; doctor: string; especialidad: string }[] = [];

  diasDelMes: string[] = [];
  nombreMes = 'Julio';

  ngOnInit(): void {
    const year = 2025;
    const month = 6; 
    const daysInMonth = 31;
    this.diasDelMes = Array.from({ length: daysInMonth }, (_, i) => {
      const day = (i + 1).toString().padStart(2, '0');
      return `${year}-07-${day}`;
    });
  }

  seleccionarEspecialidad(nombre: string) {
    this.especialidadSeleccionada = nombre;
    this.doctores = this.especialidades.find(e => e.nombre === nombre)?.doctores || [];
    this.doctorSeleccionado = '';
    this.diasDisponibles = [];
    this.diaSeleccionado = '';
    this.horariosReservados = [];
  }

  seleccionarDoctor(nombre: string) {
    this.doctorSeleccionado = nombre;

    const disponibilidad = {
      'Dr. Felipe Quispe': {
        dias: ['2025-07-10', '2025-07-14', '2025-07-20'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dra. Ana Torres': {
        dias: ['2025-07-11', '2025-07-15', '2025-07-18'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dr. Beto Suárez': {
        dias: ['2025-07-12', '2025-07-17', '2025-07-25'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dr. Carlos Mendoza': {
        dias: ['2025-07-13', '2025-07-17', '2025-07-22'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dra. Diana López': {
        dias: ['2025-07-14', '2025-07-10', '2025-07-16'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dra. Elena Chávez': {
        dias: ['2025-07-15', '2025-07-17', '2025-07-20'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dr. Rolando Soriano': {
        dias: ['2025-07-16', '2025-07-08', '2025-07-19'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dr. Jorge Herrera': {
        dias: ['2025-07-17', '2025-07-18', '2025-07-19'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dr. Ariano Cuellar': {
        dias: ['2025-07-18', '2025-07-19', '2025-07-20'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dr. Aldo Alanya': {
        dias: ['2025-07-19', '2025-07-11', '2025-07-09'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      },
      'Dr. Edson Sosa': {
        dias: ['2025-07-20', '2025-07-28', '2025-07-25'],
        horarios: ['09:00 - 09:30', '10:30 - 11:00', '16:00 - 16:30']
      }
    }as const;

    this.diasDisponibles = (disponibilidad as any) [nombre].dias;
    this.horarios = (disponibilidad as any)[nombre].horarios;
    this.diaSeleccionado = '';
    this.horariosReservados = [];
    
    if (this.diaSeleccionado) {
    this.horariosReservados = this.citas
      .filter(c => c.dia === this.diaSeleccionado && c.doctor === nombre)
      .map(c => c.horario);
  }
  this.actualizarHorariosReservados();
  }

  actualizarHorariosReservados() {
    if (this.diaSeleccionado && this.doctorSeleccionado) {
      this.horariosReservados = this.citas
        .filter(c => c.dia === this.diaSeleccionado && c.doctor === this.doctorSeleccionado)
        .map(c => c.horario);
    } else {
      this.horariosReservados = [];
    }
  }

  seleccionarDia(dia: string) {
    this.diaSeleccionado = dia;
    this.horariosReservados = this.citas
      .filter(c => c.dia === dia && c.doctor === this.doctorSeleccionado)
      .map(c => c.horario);

    setTimeout(() => {
      const horarioEl = document.getElementById('horarios');
      horarioEl?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }


  advertenciaActiva = false;
  mensajeAdvertencia = '';

  seleccionarHorario(horario: string) {
    if (this.horariosReservados.includes(horario)) {
      this.mensajeAdvertencia = 'Este horario ya está ocupado.';
      this.advertenciaActiva = true;
      return;
    }

    const yaTieneCita = this.citas.some(c => c.doctor === this.doctorSeleccionado);
    if (yaTieneCita) {
      this.mensajeAdvertencia = 'Ya tienes una cita reservada con este doctor.';
      this.advertenciaActiva = true;
      return;
    }
    this.horarioSeleccionado = horario;
    this.mostrarModal = true;
  }
  cerrarAdvertencia() {
    this.advertenciaActiva = false;
    this.mensajeAdvertencia = '';
  }

  confirmarReserva() {
    if (!this.horariosReservados.includes(this.horarioSeleccionado)) {
      this.horariosReservados.push(this.horarioSeleccionado);
      this.citas.push({
        dia: this.diaSeleccionado,
        horario: this.horarioSeleccionado,
        doctor: this.doctorSeleccionado,
        especialidad: this.especialidadSeleccionada
      });
    }
    this.mostrarModal = false;
  }

  cancelarReserva() {
    this.horarioSeleccionado = '';
    this.mostrarModal = false;
  }

  eliminarCita(index: number) {
    const cita = this.citas[index];
    this.citas.splice(index, 1);
    if (cita.dia === this.diaSeleccionado && cita.doctor === this.doctorSeleccionado) {
      this.actualizarHorariosReservados();
    }
  }
  get citasOrdenadas() {
  return this.citas.slice().sort((a, b) => {
    const fechaA = new Date(`${a.dia} ${a.horario.split(' - ')[0]}`);
    const fechaB = new Date(`${b.dia} ${b.horario.split(' - ')[0]}`);
    return fechaA.getTime() - fechaB.getTime();
  });
}
}
