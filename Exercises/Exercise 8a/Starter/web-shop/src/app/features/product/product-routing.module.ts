import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductReviewListComponent } from '../review/components/product-review-list/product-review-list.component';
import { ProductReviewComponent } from '../review/components/product-review/product-review.component';
import { isSavedGuard } from '../review/guards/is-saved.guard';
import { authenticationGuard } from '../../core/components/authentication/authentication.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductGeneralComponent } from './components/product-general/product-general.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';

const routes: Routes = [
  {path: ':pgid', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent, children: [
      {path: 'general', component: ProductGeneralComponent},
      {path: 'prices', component: ProductPriceComponent},
      {path: 'reviews', component: ProductReviewListComponent},
      {path: 'review', component: ProductReviewComponent, 
        canActivate:[authenticationGuard], 
        canDeactivate:[isSavedGuard]
      },
      {path: '', redirectTo: 'general', pathMatch: 'full'}]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
