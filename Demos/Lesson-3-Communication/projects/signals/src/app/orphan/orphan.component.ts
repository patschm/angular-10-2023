import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductStateService } from '../product-state.service';

@Component({
  selector: 'app-orphan',
  templateUrl: './orphan.component.html',
  styleUrls: ['./orphan.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OrphanComponent {
  
  public data:IProduct = {brand:'', name:'', price:0};
  

  constructor(public svc:ProductStateService){
    effect(()=>{
      this.data = svc.current();
    });
    
  }
}
