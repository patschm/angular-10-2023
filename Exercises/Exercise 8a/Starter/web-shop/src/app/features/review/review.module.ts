import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductReviewListComponent } from './components/product-review-list/product-review-list.component';
import { RouterModule } from '@angular/router';
import { NotSavedComponent } from './components/not-saved/not-saved.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductReviewComponent,
    ProductReviewListComponent,
    NotSavedComponent
  ],
  exports: [
    ProductReviewComponent,
    ProductReviewListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModalModule
  ]
})
export class ReviewModule { }
