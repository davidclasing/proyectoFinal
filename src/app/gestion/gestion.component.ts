import { Component, OnInit } from '@angular/core';
import { TransportistasService } from '../transportistas.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  animations: [
    trigger('showInfo', [
                state('visible', style({ transform: 'translateX(0)' })),
                state('hidden', style({ transform: 'translateX(200%)',display:"none" })),
                state('void', style({ left: '-400px' })),
                transition('visible => hidden', animate(600)),
                transition('hidden => visible', animate(600)),
                transition('void => visible', animate(600))
    ])
  ]
})
export class GestionComponent implements OnInit {
  filtroBusquedaTransportista:string;
  transportistas:boolean = true;
  transportistasList = [];
  detallesInfo = [];
  show:string = "hidden";
  constructor(private transportistasXHR:TransportistasService) { 
    
   }

  ngOnInit() {
    this.obtenerTransportistas("");
    }
  obtenerTransportistas(filtro){
    this.transportistasList = [];
    let texto = this.filtroBusquedaTransportista;
    this.transportistasXHR.obtenerTransportistas(filtro).then((data)=>{
      debugger;
      if(data['ret'] == "ok"){
        let numTransportistas = Object.keys(data['transportistas']).length;
        for(var a = 0;a<numTransportistas;a++){
          this.transportistasList.push(data['transportistas'][a]);
        }
      }
    })
  }
  detalles(transp){
    this.detallesInfo=transp;
    console.log(this.detallesInfo);
    
    this.show = "visible";
  }
  
  cerrarPopup(){
    this.show = "hidden";
  }
}
