import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

export const dataGuard: ResolveFn<Observable<string>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  {
    const svc = inject(DataService);
    return svc.text;
  };
