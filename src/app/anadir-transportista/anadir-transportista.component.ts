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

  constructor(private transportistaService:TransportistasService,private app:AppComponent) { }
  form;
  ngOnInit() {
    console.log(this.form);
  }

  anadirTransportista(data){
    
    this.transportistaService.agregarTransportista(data.value).then((data)=>{
      if(data['ret'] == "ok"){
        debugger;
        this.app.mostrarAlerta("Todo ok","error");
      }
      else{

      }
    })
  }
}
