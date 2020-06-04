import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  // why use injector instead of injecting the AuthService directly?
  // explaination:https://www.youtube.com/watch?v=UrfhqE7I-3o&list=PLC3y8-rFHvwg2RBz6UplKTGIXREj9dV0G&index=25
  constructor(private injector: Injector) {}

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
