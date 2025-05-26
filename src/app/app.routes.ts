import { Routes } from '@angular/router';


import { LabComponent } from './pages/lab/lab.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'Lab',
        component:LabComponent
    },{
        path: '',
        component: HomeComponent
    }
    
];

