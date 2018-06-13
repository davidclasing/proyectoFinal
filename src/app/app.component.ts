import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appRoot = LoginComponent;
  warningAlert:boolean = true;
  
  txtAlert = "";
  mostrarAlerta(texto, tipo){
    $("#alert").fadeIn(1000);
    this.txtAlert = texto;
    debugger;
    if(tipo == "success"){
      this.warningAlert = true;
    }
    else{
      this.warningAlert = false;
    }
    setTimeout(()=>{
      $("#alert").fadeOut(1000);
    },4000)
  }
}
