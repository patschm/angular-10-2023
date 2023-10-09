import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ProductGeneralComponent } from './components/product-general/product-general.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductPriceComponent, ProductGeneralComponent],
  exports: [ProductListComponent, ProductPriceComponent, ProductDetailComponent, ProductGeneralComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers:[ProductService]
})
export class ProductModule { }
