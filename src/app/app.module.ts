import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActividadesListComponent } from './components/actividades-list/actividades-list.component';

import { ReactiveFormsModule } from '@angular/forms';

import { ActivityViewComponent } from './components/activity-view/activity-view.component';
import { ActividadCardComponent } from './components/actividad-card/actividad-card.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewActivityFormComponent } from './components/new-activity-form/new-activity-form.component';
import { UpdateActivityFormComponent } from './components/update-activity-form/update-activity-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NewOpinionFormComponent } from './components/new-opinion-form/new-opinion-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ActividadesListComponent,
    NavBarComponent,
    ActividadCardComponent,
    ActivityViewComponent,
    ContactoComponent,
    NewActivityFormComponent,
    UpdateActivityFormComponent,
    FooterComponent,
    LoginFormComponent,
    NewOpinionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
