import { HttpClient } from '@angular/common/http';
import { ProductGroup } from '../../../core/entities';
import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, retry } from 'rxjs/operators';
import { BaseService } from '../../../core/services/base.service';
import { IENDPOINTS } from '../../../core/constants';
import { IRestEndpoints } from '../../../core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService extends BaseService
{
  public get productgroups$(): Observable<ProductGroup[]> {
    return this.http.get<ProductGroup[]>(this.config.apiEndpoint + 'productgroups')
      .pipe(retry(3), catchError(this.handleError([])));
  }
  public productgroup(pgid: Number): Observable<ProductGroup>
  {
    return this.http.get<ProductGroup>(this.config.apiEndpoint + 'productgroups/' + pgid)
      .pipe(
        retry(3),
        catchError(this.handleError(null)),
        filter((pg):pg is ProductGroup => !!pg),
        );
  }
  constructor(@Inject(IENDPOINTS)config: IRestEndpoints, private http: HttpClient) {
    super(config);
  }
}

