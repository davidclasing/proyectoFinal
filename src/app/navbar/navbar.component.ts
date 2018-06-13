import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginXHR:LoginService,private router:Router) { }

  ngOnInit() {
  }
  salir(){
    
      localStorage.removeItem("token");
      this.router.navigateByUrl("/");
  }
}
