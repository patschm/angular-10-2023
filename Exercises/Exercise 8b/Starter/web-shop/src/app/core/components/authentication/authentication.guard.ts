import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const authenticationGuard  = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authSvc = inject(AuthenticationService);
    const router = inject(Router);
    authSvc.requestedUrl = state?.url;
    if (authSvc.isLoggedIn) return true;
    router.navigate(['login']);
    return false;
};
