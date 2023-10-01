import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductGroup } from '../../../../core/entities';
import { ProductActions } from '../../store';
import { ProductService } from '../../services/product.service';
import { ProductgroupActions } from '../../../productgroup/store';
import { ProductgroupService } from '../../../productgroup/services/product-group.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private subs?: Subscription;
  public product$?: Observable<Product>;
  public productGroup$?: Observable<ProductGroup>;

  public ngOnInit() {
    this.subs = this.route.params
      .pipe(
        map((bag:any)=>bag.id),
        concatMap(id=>this.prods.product(id)),      
        tap((prod: Product)=>{
          this.product$ = of(prod);
          this.store.dispatch(ProductActions.selectProduct(prod));
        }),
        concatMap((prod:Product)=>this.groups.productgroup(prod.productGroup.id)),
        tap((grp: ProductGroup)=>{
          this.productGroup$ = of(grp);
          this.store.dispatch(ProductgroupActions.selectProductgroup(grp));
        })
      ).subscribe();
  }
  constructor(
    private store: Store,
    private prods: ProductService,
    private groups: ProductgroupService,
    private route: ActivatedRoute) {
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
