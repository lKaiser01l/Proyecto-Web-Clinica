import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-doctores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-doctores.component.html',
  styleUrl: './login-doctores.component.css'
})

export class LoginDoctoresComponent {
  usuario: string = '';
  password: string = '';
  constructor(private router: Router) {}
  iniciarSesion() {
    if (this.usuario === 'doctor' && this.password === '12345') {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
