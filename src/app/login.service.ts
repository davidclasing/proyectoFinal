import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  logIn(user:string,pass:string){
    let data = {
      action: 1,
      user:user,
      pass:pass
    }
   return new Promise((resolve,reject)=>{
    this.http.post("http://appmovil.letslearn.es/hola.php",data).subscribe((data)=>{
      resolve(data);
   })
  })
  }
  comprobarLogin(){
    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");
    let data = {
      action:2
    }
    return new Promise((resolve,reject)=>{
      this.http.post("http://appmovil.letslearn.es/hola.php",data).subscribe((data)=>{
        resolve(data);
     })
    })
  }
  logOut(){
    localStorage.removeItem("token");
  }
}
