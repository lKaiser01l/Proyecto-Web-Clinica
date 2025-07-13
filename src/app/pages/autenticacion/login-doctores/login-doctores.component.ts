import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-doctores',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './login-doctores.component.html',
  styleUrl: './login-doctores.component.css'
})

export class LoginDoctoresComponent {
  email = '';
  password = '';
  mensajeError = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  login(): void {
    this.authService.loginper(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.guardarSession(response);
        const rol = response.rol;

        if (rol === 'ADMIN') {
          this.router.navigate(['/dashboard-admin']);
        } else if (rol === 'DOCTOR') {
          this.router.navigate(['/dashboard-doctor']);
        } else {
          this.mensajeError = 'No tienes permisos para este acceso.';
        }
      },
      error: () => {
        this.mensajeError = 'Credenciales incorrectas o error de conexión.';
      }
    });
  }
  
}
