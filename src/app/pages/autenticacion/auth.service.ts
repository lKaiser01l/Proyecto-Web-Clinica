import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface RegistroRequest {
  nombres: string;
  apellido: string;
  email: string;
  password: string;
  dni: string;
  telefono: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  nombre: string;
  apellido: string;
  rol: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {
    
  }

  // Registrar paciente
  register(data: RegistroRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data);
  }

  // Login de cualquier usuario
  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data);
  }
  loginper(email: string, password: string): Observable<AuthResponse> {
  return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {
    email,
    password
  });
}

  // Guardar sesión en localStorage
  saveSession(auth: AuthResponse): void {
    localStorage.setItem('token', auth.token);
    localStorage.setItem('email', auth.email);
    localStorage.setItem('nombre', auth.nombre);
    localStorage.setItem('rol', auth.rol);
  }

  guardarSession(response: AuthResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('usuario', JSON.stringify({
      nombre: response.nombre,
      apellido: response.apellido,
      email: response.email,
      rol: response.rol
    }));
  }

  getSession(): any {
    const session = localStorage.getItem('usuario');
    return session ? JSON.parse(session) : null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRol(): string | null {
    return localStorage.getItem('rol');
  }

  logout(): void {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
