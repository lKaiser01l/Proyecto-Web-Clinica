import { Routes } from '@angular/router';


import { LabComponent } from './pages/lab/lab.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctoresComponent }  from './pages/doctores/doctores.component';
import { EspecialidadesComponent }  from './pages/especialidades/especialidades.component';
import { LoginDoctoresComponent } from './pages/autenticacion/login-doctores/login-doctores.component';
import { LoginPacienteComponent } from './pages/autenticacion/login-paciente/login-paciente.component';
import { CitaComponent } from './pages/compartido/cita/cita.component';
import { DashBoardPacienteComponent } from './pages/DashBoardPaciente/DashBoardPaciente.component';
import { FooterComponent } from './pages/compartido/footer/footer.component';
import { SearchbarComponent } from './pages/searchbar/searchbar.component';
import { BlogSaludComponent } from './pages/blog-salud/blog-salud.component'; 
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PortaldoctorComponent} from './pages/Portaldoctor/Portaldoctor.component';

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
        path: 'DashBoardPaciente',
        component: DashBoardPacienteComponent
    },{
        path: 'Portal-doctor',
        component: PortaldoctorComponent

    },{
        path:'cita',
        component: CitaComponent
    },{
        path: 'footer',
        component: FooterComponent
    },{
        path: 'searchbar',
        component: SearchbarComponent
    },{ 
        path: 'doctores',
         component: DoctoresComponent 
    },{ 
        path: 'especialidades',
         component: EspecialidadesComponent 
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
