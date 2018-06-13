import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  constructor(private http:HttpClient) { }

  obtenerCoordenadas(punto){
    return new Promise((resolve,reject)=>{
      
      
      this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+punto+"&key=AIzaSyBbhe-mTH0CxVx7ZVgWJPxyvHBLLftZusI",{headers:{}}).subscribe((data)=>{
        
        resolve(data);
    })
    })
  }
}
