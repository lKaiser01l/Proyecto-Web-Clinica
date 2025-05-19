import { Routes } from '@angular/router';

import { LoginComponent } from './autenticacion/login/login.component';
import { LabComponent } from './pages/lab/lab.component';

export const routes: Routes = [
    {
        path: '',
        component:LabComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];

