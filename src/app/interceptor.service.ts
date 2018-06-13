import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // Get the auth header from your auth service.
   if(!req.url.match(/^(https:\/\/maps.googleapis.com\/maps\/api\/geocode\/).*/)){
       
        const authToken = localStorage.getItem("token");
       const authReq = req.clone({headers: req.headers.set('Authorization', `Token ${authToken}`)});
       return next.handle(authReq);
   }
   else{
       
    const authToken = localStorage.getItem("token");
    const authReq = req.clone({headers: req.headers.delete('content-type')});
    return next.handle(authReq);
   }
       
   }
}