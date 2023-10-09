import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductGroup } from '../../../../core/entities';
import { Observable } from 'rxjs';
import { selectProductgroup } from '../../store/productgroup.actions';
import { ProductgroupService } from '../../services/product-group.service';

@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {
  public productGroups$?: Observable<ProductGroup[]>;

  public selectGroup(pg: ProductGroup):void
  {
    let productGroup: ProductGroup = pg;
    this.store.dispatch(selectProductgroup(productGroup));
  }

  public ngOnInit() {
      this.productGroups$ = this.data.productgroups$;
  }

  constructor(private data: ProductgroupService, private store:Store) {
  }
}
