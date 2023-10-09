import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupListComponent } from './components/productgroup-list/productgroup-list.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ProductgroupStoreModule } from './store';

@NgModule({
  declarations: [ProductgroupListComponent],
  exports:[ProductgroupListComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    RouterModule, 
    ProductgroupStoreModule
  ]
})
export class ProductgroupModule { }
