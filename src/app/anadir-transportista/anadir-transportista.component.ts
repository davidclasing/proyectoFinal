import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { AppComponent } from './../app.component';
import { TransportistasService } from './../transportistas.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-anadir-transportista',
  templateUrl: './anadir-transportista.component.html',
  styleUrls: ['./anadir-transportista.component.css']
})
export class AnadirTransportistaComponent implements OnInit {

  constructor(private transportistaService:TransportistasService,private app:AppComponent,private loginXHR:LoginService,private router:Router) { }
  form;
  ngOnInit() {
    this.loginXHR.comprobarLogin().then((data)=>{
      if(data['ret'] != "ok"){
        this.router.navigateByUrl("/");
      }
    })
  }

  anadirTransportista(data){
    
    this.transportistaService.agregarTransportista(data.value).then((data)=>{
      if(data['ret'] == "ok"){
        debugger;
        this.app.mostrarAlerta("Se ha insertado correctamente el transportista","success");
      }
      else{
        this.app.mostrarAlerta(data['error'],"error");
      }
    })
  }
}
