import { Routes } from '@angular/router';
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
];
