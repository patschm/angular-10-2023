import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/entities';
import { ProductService } from '../../services/product.service';
import { EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
  public products$: Observable<Product[]> = EMPTY;

  public selectProduct(product: Product):void
  {
    this.productState.selectProduct(product.id);
    this.router.navigate(['/detail', product.id]);
  }
  
  constructor(private productState: ProductService, private router: Router) {
   
  }
  ngOnInit(): void {
    this.products$ = this.productState.getProducts$(1);
  }
}
