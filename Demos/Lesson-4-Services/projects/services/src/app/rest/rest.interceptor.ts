import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, sample } from 'rxjs';

// Use interceptors for:
// Loggin
// Parsing response
// Caching
// Add headers (bearer tokens)
@Injectable()
export class RestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const sampleToken = 'hiuoHIOHol5i6h7I8O94hoiuI33OULhbiH==';

        const authReq = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + sampleToken)
        });
        return next.handle(authReq);
    }
}