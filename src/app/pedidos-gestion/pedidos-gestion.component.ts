import { GeolocalizacionService } from './../geolocalizacion.service';
import { Router } from '@angular/router';
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
  selector: 'app-pedidos-gestion',
  templateUrl: './pedidos-gestion.component.html',
  styleUrls: ['./pedidos-gestion.component.css'],
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
export class PedidosGestionComponent implements OnInit {
  pedidosList = [];
  filtroFecha:any = false;
  filtroTexto:any = false;
  campoTexto;
  fechaInicio:string;
  fechaFin:string;
  detallesInfo = [];
  show:string = "hidden";
  constructor(private transportistasXHR:TransportistasService,private router:Router,private geoLoc:GeolocalizacionService) { }

  ngOnInit() {
    this.obtenerPedidos();
  }
  obtenerPedidos(){
    let data;
    debugger;
    if(this.fechaFin == undefined){
      this.fechaFin = null;
    }
    if(this.fechaInicio == undefined){
      this.fechaInicio = null;
    }
    if(this.campoTexto == undefined){
      this.campoTexto = null;
    }
    if(this.filtroFecha == true && this.filtroTexto == true){
          data = {
            fechaInicio:this.fechaInicio,
            fechaFin:this.fechaFin,
            campoTexto:this.campoTexto
          }
    }
    else if(this.filtroFecha == true){
        data = {
          fechaInicio:this.fechaInicio,
            fechaFin:this.fechaFin,
          campoTexto:null
        }
    }
    else if(this.filtroTexto == true){
      data = {
        fechaInicio:null,
        fechaFin:null,
        campoTexto:this.campoTexto
      }
    }
    else{
      data = {
        fechaInicio:null,
        fechaFin:null,
        campoTexto:null
      }
    }
    this.transportistasXHR.obtenerPedidos(data).then((data)=>{
      this.pedidosList = [];
      let numTransportistas = Object.keys(data['pedidos']).length;
      for(var a = 0;a<numTransportistas;a++){
        this.pedidosList.push(data['pedidos'][a]);
      }
    })
  }
  detalles(pedido){
    this.detallesInfo=pedido;
    console.log(this.detallesInfo);
    
    this.show = "visible";
  }
  cerrarPopup(){
    this.show = "hidden";
  }
  obtenerCoordenadas(punto){
     
    return new Promise((resolve,reject)=>{
      
      this.geoLoc.obtenerCoordenadas(punto).then((data)=>{
          resolve(data);
      })
    });
  }
  verRuta(origen,destino){
    let origenCoordLat;
    let origenCoordLng;
    let destinoCoordLat;
    let destinoCoordLng;
    this.obtenerCoordenadas(origen).then((data)=>{
      origenCoordLat = data["results"]["0"]["geometry"]["location"]['lat'];
      origenCoordLng = data["results"]["0"]["geometry"]["location"]['lng'];
      this.obtenerCoordenadas(destino).then((data)=>{
         destinoCoordLat =  data["results"]["0"]["geometry"]["location"]['lat'];
         destinoCoordLng = data["results"]["0"]["geometry"]["location"]['lng'];
         this.router.navigate(["/seguimiento"],
         {queryParams: 
                    
                      
                      
                      {origenLat:origenCoordLat,
                      origenLng:origenCoordLng,
                    destinationLat:destinoCoordLat,
                    destinationLng:destinoCoordLng}
                    
                  });
      })
      
    })
  }
}
