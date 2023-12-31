import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { Price, Product } from '../../../../core/entities';
import { IProductState, productSelect } from '../../store';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  public prices$?: Observable<Price[]>;

  public ngOnInit() {
    this.prices$ = this.store.select(productSelect)
    .pipe(
      map((st:IProductState)=>st.currentProduct),
      switchMap((prod:Product)=>this.http.prices(prod.id))
    );     
  }
  constructor(private http: ProductService, private store: Store) {
  }
}
