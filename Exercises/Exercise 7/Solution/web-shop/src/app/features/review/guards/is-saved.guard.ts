import { CanDeactivateFn } from '@angular/router';
import { ProductReviewComponent } from '../components/product-review/product-review.component';

export const isSavedGuard: CanDeactivateFn<ProductReviewComponent> = (component:ProductReviewComponent) => {
    return component.canDeactivate();
}
