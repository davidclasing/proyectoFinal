import { AuthInterceptor } from './interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';

import { LoginService } from './login.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AnadirTransportistaComponent } from './anadir-transportista/anadir-transportista.component';
import { GestionComponent } from './gestion/gestion.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PedidosGestionComponent } from './pedidos-gestion/pedidos-gestion.component';
import {AgmDirectionModule} from 'agm-direction';
import { AngularFireModule } from 'angularfire2';

	import { AngularFirestoreModule } from 'angularfire2/firestore';
	import { AngularFireStorageModule } from 'angularfire2/storage';
	import { AngularFireAuthModule } from 'angularfire2/auth';
const environment = {
  apiKey: "AIzaSyC8SUC4snCWIpJtdCC4KvB02WG7YTYf1UA",
  authDomain: "proyectofinal-206916.firebaseapp.com",
  databaseURL: "https://proyectofinal-206916.firebaseio.com",
  projectId: "proyectofinal-206916",
  storageBucket: "proyectofinal-206916.appspot.com",
  messagingSenderId: "618231293305"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    AgmDirectionModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    		AngularFireStorageModule
    
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
