import { Routes } from '@angular/router';


import { LabComponent } from './pages/lab/lab.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctoresComponent }  from './pages/doctores/doctores.component';
import { LoginDoctoresComponent } from './pages/autenticacion/login-doctores/login-doctores.component';
import { LoginPacienteComponent } from './pages/autenticacion/login-paciente/login-paciente.component';
import { CitaComponent } from './pages/compartido/cita/cita.component';
import { FooterComponent } from './pages/compartido/footer/footer.component';
import { BlogSaludComponent } from './pages/blog-salud/blog-salud.component'; 
import { ServiciosComponent } from './pages/servicios/servicios.component';

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
    }, {
        path: 'login-doctores',
        component: LoginDoctoresComponent
    },{
        path:'cita',
        component: CitaComponent
    },{
        path: 'footer',
        component: FooterComponent
    },{ 
        path: 'doctores',
         component: DoctoresComponent 
    },{ 
        path: 'blog',
        component: BlogSaludComponent 
    },{ 
        path: 'servicios',
        component: ServiciosComponent 
    },{
        path: '**',
        redirectTo: '' 
    } 
    

];
