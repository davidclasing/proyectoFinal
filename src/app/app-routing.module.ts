import { GestionComponent } from './gestion/gestion.component';
import { AnadirTransportistaComponent } from './anadir-transportista/anadir-transportista.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { HomeComponent } from './home/home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes:Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'seguimiento',component:SeguimientoComponent},
  {path:'anadirTransportista',component:AnadirTransportistaComponent},
  {path:'gestion',component:GestionComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}