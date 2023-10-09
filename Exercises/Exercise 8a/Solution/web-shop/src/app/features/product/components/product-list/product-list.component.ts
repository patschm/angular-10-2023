import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { map, forkJoin, mergeMap, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product, ProductGroup } from '../../../../core/entities';
import { selectProduct } from '../../store/product.actions';
import { ActivatedRoute } from '@angular/router';
import { ProductgroupService } from '../../../productgroup/services/product-group.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class ProductListComponent implements OnInit, OnDestroy 
{
  private subs?: Subscription;
  public productGroup?: ProductGroup | null;
  public products?: Product[];

  public selectProduct(product: Product):void
  {
    this.store.dispatch(selectProduct(product));
  }
  public ngOnInit() {
    this.subs = this.route.params
      .pipe(
        map((bag: any)=>+bag.pgid),
        mergeMap(pgid=>forkJoin({
          productgroup:this.groups.productgroup(<number>pgid),
          products:this.prods.products(<number>pgid)
          }))
      ).subscribe(obj=>{
        this.productGroup = obj.productgroup;
        this.products = obj.products;
      });
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  constructor(
    private route: ActivatedRoute,
    private groups: ProductgroupService, 
    private prods: ProductService, 
    private store: Store) {
  }
}
