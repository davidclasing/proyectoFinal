import { AuthInterceptor } from './interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AnadirTransportistaComponent } from './anadir-transportista/anadir-transportista.component';
import { GestionComponent } from './gestion/gestion.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PedidosGestionComponent } from './pedidos-gestion/pedidos-gestion.component';
import {AgmDirectionModule} from 'agm-direction';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SeguimientoComponent,
    AnadirTransportistaComponent,
    GestionComponent,
    PedidosGestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCHqyQMK6b2gKl2_2j6U3cvZed-mK31WR8"
    }),
    AgmDirectionModule
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
