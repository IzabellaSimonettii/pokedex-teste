import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppIntercetor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    const authReq = req.clone({
      // headers: new HttpHeaders({
      //   'autorization': 'value'
      // })
    });
    return next.handle(authReq);
  }
}
