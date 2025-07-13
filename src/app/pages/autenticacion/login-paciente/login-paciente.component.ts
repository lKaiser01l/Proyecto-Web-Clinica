

import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse, AuthService, LoginRequest } from '../auth.service';

@Component({
  selector: 'app-login-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './login-paciente.component.html',
  styleUrl: './login-paciente.component.css'
})
export class LoginPacienteComponent {
  
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  modoRegistro = false;

  mensajeError = '';
  formulario: FormGroup = this.fb.group({
    nombres: [''],
    apellido: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    dni: [''],
    telefono: [''],
  });

  cambiarModo() {
    this.modoRegistro = !this.modoRegistro;

    if (this.modoRegistro) {
      // Activar validaciones extra si se está registrando
      this.formulario.get('nombres')?.setValidators([Validators.required]);
      this.formulario.get('apellido')?.setValidators([Validators.required]);
      this.formulario.get('dni')?.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
      this.formulario.get('telefono')?.setValidators([Validators.required, Validators.minLength(9), Validators.maxLength(9)]);
    } else {
      // Limpiar validaciones extra si es login
      this.formulario.get('nombres')?.clearValidators();
      this.formulario.get('apellido')?.clearValidators();
      this.formulario.get('dni')?.clearValidators();
      this.formulario.get('telefono')?.clearValidators();
    }

    this.formulario.get('nombres')?.updateValueAndValidity();
    this.formulario.get('apellido')?.updateValueAndValidity();
    this.formulario.get('dni')?.updateValueAndValidity();
    this.formulario.get('telefono')?.updateValueAndValidity();
  }

  login(): void {
    if (this.formulario.invalid) {
      this.mensajeError = 'Por favor completa todos los campos.';
      return;
    }

    const credenciales = {
      email: this.formulario.value.email,
      password: this.formulario.value.password,
    };

    this.authService.login(credenciales).subscribe({
      next: (res: AuthResponse) => {
        this.authService.saveSession(res);
        this.redirigirPorRol(res.rol);
      },
      error: () => {
        this.mensajeError = 'Credenciales incorrectas o error de conexión.';
      },
    });
  }

  registrar(): void {
    if (this.formulario.invalid) {
      this.mensajeError = 'Por favor completa todos los campos del registro.';
      return;
    }

    const nuevoUsuario = {
      nombres: this.formulario.value.nombres,
      apellido: this.formulario.value.apellido,
      email: this.formulario.value.email,
      password: this.formulario.value.password,
      dni: this.formulario.value.dni,
      telefono: this.formulario.value.telefono,
    };

    this.authService.register(nuevoUsuario).subscribe({
      next: (res: AuthResponse) => {
        this.authService.saveSession(res);
        this.redirigirPorRol(res.rol);
      },
      error: () => {
        this.mensajeError = 'No se pudo registrar. Verifica los datos.';
      },
    });
  }

  private redirigirPorRol(rol: string): void {
    if (rol === 'PACIENTE') this.router.navigate(['/DashBoardPaciente']);
    else if (rol === 'DOCTOR') this.router.navigate(['/doctor']);
    else if (rol === 'ADMIN') this.router.navigate(['/admin']);
  }

}
