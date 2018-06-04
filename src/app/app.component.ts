import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appRoot = LoginComponent;
  warningAlert:boolean = false;
  alertType = {
    warning: this.warningAlert,
    success: !this.warningAlert
  }
  txtAlert = "";
  mostrarAlerta(texto, tipo){
    $("#alert").fadeIn();
    this.txtAlert = texto;
    if(tipo == "success"){
      this.warningAlert = false;
    }
    else{
      this.warningAlert = true;
    }
    setTimeout(()=>{
      
    }
  }
}
