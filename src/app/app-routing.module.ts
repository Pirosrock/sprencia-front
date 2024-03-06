import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesListComponent } from './components/actividades-list/actividades-list.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ActivityViewComponent } from './components/activity-view/activity-view.component';
import { NewActivityFormComponent } from './components/new-activity-form/new-activity-form.component';
import { UpdateActivityFormComponent } from './components/update-activity-form/update-activity-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'actividades' },  
  { path: 'actividades', component: ActividadesListComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'actividad/:idactividad', component: ActivityViewComponent },
  { path: 'actividad/update/:idactividad', component: UpdateActivityFormComponent },
  {path: 'login', component: LoginFormComponent},
  {path: 'nuevaactividad', component: NewActivityFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
