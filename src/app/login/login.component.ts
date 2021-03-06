

import { LoginService } from './../login.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  pass:string;
  constructor(private loginXHR:LoginService,private router:Router) { 
    this.user = "admin";
    this.pass = "admin";
  }

  ngOnInit() {
    
  }

  logIn(){
    this.loginXHR.logIn(this.user,this.pass).then((data)=>{
      if(data['ret'] == "ok"){
        localStorage.setItem("token",data['token']);
        this.router.navigateByUrl("/seguimiento");
      }
  });
}
}