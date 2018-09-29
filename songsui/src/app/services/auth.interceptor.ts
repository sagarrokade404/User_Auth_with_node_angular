import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = localStorage.getItem('token');
    if ( currentUser) {
      req  = req.clone({
              setHeaders: {
                Authorization: `Bearer ${currentUser}`
              }
                });
    }

    return next.handle(req);
  }
}
