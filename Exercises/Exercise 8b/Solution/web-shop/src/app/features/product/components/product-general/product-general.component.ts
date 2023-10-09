import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Product, ProductGroup } from '../../../../core/entities';
import { IProductState, productSelect } from '../../store';
import { IProductgroupState, productgroupSelect } from '../../../productgroup/store';

@Component({
  selector: 'app-product-general',
  templateUrl: './product-general.component.html',
  styleUrls: ['./product-general.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductGeneralComponent implements OnInit {

  public product$?: Observable<Product>;
  public productGroup$?: Observable<ProductGroup>;

  public ngOnInit() {
      this.product$ = this.store.select(productSelect)
        .pipe(map((ps: IProductState)=>ps.currentProduct));
      this.productGroup$ = this.store.select(productgroupSelect)
        .pipe(map((st:IProductgroupState)=>st.currentProductgroup));
  }
  
  constructor(private store: Store) {
  }

}
