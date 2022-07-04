import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent,HttpInterceptor, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const params = new HttpParams()
      .set('apikey', environment.apikey)
      .set('hash', environment.hash)
      .set('ts', environment.ts)

    let payload = request.clone({  params  })
    return next.handle(payload);
  }

}
