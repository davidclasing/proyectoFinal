import { Observable } from 'rxjs';
import { TransportistasService } from './../transportistas.service';
import { GeolocalizacionService } from './../geolocalizacion.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'util';
import { AgmMap } from '@agm/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})




export class SeguimientoComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  origen;
  destino;
  sub;
  dir = undefined;
  transportistasList = [];
  filtroBusquedaTransportista:string;
  rastreador;
  seguimiento:boolean = true;
  constructor(private route:ActivatedRoute,private router:Router,private transportistasXHR:TransportistasService,private db:AngularFirestore) { 
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        debugger;
        this.getDirection(params);
        debugger;
        if(params['seguimiento'] == "false"){
          this.seguimiento = false;
        }
        
      });
  }
  
  ngOnInit() {
    this.obtenerTransportistas("");
    
      
  }
  getDirection(params) {
    this.dir = {
      origin : { lat: parseFloat(params['origenLat']) , lng:parseFloat(params['origenLng'])},
      destination :{ lat: parseFloat(params['destinationLat']) , lng:parseFloat(params['destinationLng'])}
      /* this.dir = {
        origin: { lat: 24.799448, lng: 120.979021 },
        destination: { lat: 24.799524, lng: 120.975017 }
      } */
      
    }
    console.log(this.dir);
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
  rastrear(matricula){
    this.rastreador = this.db.collection("localizacion").doc(matricula).valueChanges().subscribe((doc)=>{
      console.log(doc);
      this.lat = doc['lat'];
      this.lng = doc['lng'];
      
    });

  }
}
