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
      this.http.post("http://appmovil.letslearn.es/hola.php",data).subscribe((data)=>{resolve(data)})
    })
  }
  obtenerTransportistas(filtro){
    let data = {
      filtro:filtro,
      action:4
    }
    return new Promise((resolve,reject)=>{
      this.http.post("http://appmovil.letslearn.es/hola.php",data).subscribe((data)=>{resolve(data)})
    });
  }
  obtenerPedidos(filtros){
    let data = {
        fechaInicio:filtros.fechaInicio,
        fechaFin:filtros.fechaFin,
        campoTexto:filtros.campoTexto,
        action: 5
      }
    
    return new Promise((resolve,reject)=>{
      this.http.post("http://appmovil.letslearn.es/hola.php",data).subscribe((data)=>{resolve(data)})
    });
  }
}
