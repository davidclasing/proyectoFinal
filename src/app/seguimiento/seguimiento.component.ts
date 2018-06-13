import { GeolocalizacionService } from './../geolocalizacion.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'util';
import { AgmMap } from '@agm/core';
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
  constructor(private route:ActivatedRoute,private router:Router) { 
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        debugger;
        this.getDirection(params);
        
        
      });
  }
  
  ngOnInit() {
    
    
      
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
  
}
