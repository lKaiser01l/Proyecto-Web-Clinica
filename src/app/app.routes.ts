import { Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent }      from './pages/home/home.component';
import { LabComponent }       from './pages/lab/lab.component';
import { DoctoresComponent }  from './pages/doctores/doctores.component';
import { BlogSaludComponent } from './pages/blog-salud/blog-salud.component'; 
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
  { path: '',         component: HomeComponent, pathMatch: 'full' },
  { path: 'lab',      component: LabComponent },     // minúsculas
  { path: 'doctores', component: DoctoresComponent },
  { path: 'blog',       component: BlogSaludComponent },
    { path: 'servicios', component: ServiciosComponent },
  { path: '**',       redirectTo: '' }               // 404 simple
=======


import { LabComponent } from './pages/lab/lab.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPacienteComponent } from './pages/autenticacion/login-paciente/login-paciente.component';
import { CitaComponent } from './pages/compartido/cita/cita.component';
import { FooterComponent } from './pages/compartido/footer/footer.component';

export const routes: Routes = [
    {
        path: 'Lab',
        component:LabComponent
    },{
        path: '',
        component: HomeComponent
    },{
        path: 'login-paciente',
        component: LoginPacienteComponent
    },{
        path:'cita',
        component: CitaComponent
    },{
        path: 'footer',
        component: FooterComponent
    }
    
>>>>>>> b682b284d1af8efcc383ad79ce50e6b6346f6d13
];
