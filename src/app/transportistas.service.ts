import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransportistasService {

  constructor(private http:HttpClient) { }

  agregarTransportista(datos){
    let data = {
      datos:datos,
      action:3
    }
    return new Promise((resolve,reject)=>{
      this.http.post("http://localhost/php/hola.php",data).subscribe((data)=>{resolve(data)})
    })
  }
}
