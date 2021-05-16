import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const API_ID = '3d8b309701a13f65b660fa2c64cdc517';
        // request = request.clone({
        //     setHeaders: {
        //         Authorization: `Bearer ${this.auth.getToken()}`,
                
        //     }
        // });
        //request.clone({ setHeaders: { API_ID} })
        // return next.handle(request).do((event: HttpEvent<any>) => {
        //     if (event instanceof HttpResponse) {
        //         // do stuff with response if you want
        //     }
        // }, (err: any) => {
        //     if (err instanceof HttpErrorResponse) {
        //         if (err.status === 401) {
        //             // redirect to the login route
        //             // or show a modal
        //         }
        //     }
        // });
        //collectFailedRequests
        return next.handle(request);
    }
}