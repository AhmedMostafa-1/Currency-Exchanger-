import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  apiKey = 'w1zrHWlk6KvmCrHYh9aR5QoyonWAok2u';

    constructor() { }
intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        'apikey':  this.apiKey
      })
    });
    return next.handle(authReq);
}
}
