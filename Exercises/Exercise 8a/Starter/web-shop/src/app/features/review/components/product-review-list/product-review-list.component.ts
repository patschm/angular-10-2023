import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Review } from '../../../../core/entities';
import { ProductService } from '../../../product/services/product.service';
import { IProductState, productSelect } from '../../../product/store';

@Component({
  selector: 'app-product-review-list',
  templateUrl: './product-review-list.component.html',
  styleUrls: ['./product-review-list.component.css']
})
export class ProductReviewListComponent implements OnInit {

  public reviews$?: Observable<Review[]>;
  public productID = 0;

   constructor(private prodSvc: ProductService, private store:Store) { }

  ngOnInit(): void {
    this.reviews$ = this.store.select(productSelect)
      .pipe(
        map((state:IProductState)=>state.currentProduct?.id),
        tap(id=>this.productID = id),
        switchMap((id:number)=>this.prodSvc.reviews(id))
      );
  }

}
