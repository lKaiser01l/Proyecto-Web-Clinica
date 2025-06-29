import { Routes } from '@angular/router';


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
    
];

