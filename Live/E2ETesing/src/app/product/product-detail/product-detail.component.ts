import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, } from 'rxjs';
import { Product } from '../../entities/entities';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product$?: Observable<Product>;
  
  public ngOnInit() {
    this.product$ = this.productState.selectedProduct$;
  }
  constructor(private productState: ProductService, private ac: ActivatedRoute)
  {
    this.ac.params.pipe(takeUntilDestroyed()).subscribe(ps=>this.productState.selectProduct(ps['id']));
  }
}
