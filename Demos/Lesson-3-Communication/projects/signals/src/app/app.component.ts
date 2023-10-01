import { Component, OnInit, WritableSignal, computed, effect, signal } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductStateService } from './product-state.service';
const _products: IProduct[] = [
  {
    brand:'Sony',
    name:'CVM-1850E',
    price: 2199.50
  },
  {
    brand:'Nikon',
    name:'Powershot G1',
    price: 2400
  },
  {
    brand:'Nakamichi',
    name:'Dragon',
    price: 5000
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'signals';
  public counter: WritableSignal<number> = signal(0);
  public products: WritableSignal<IProduct[]> = signal([..._products]);
  
  public linePrice = computed(()=>this.counter() * this.productState.current().price);

  public selectProduct(event:any)
  {
    this.productState.current.set(this.products()[+event.target.value]);   
  }
  public changePrice(value:number)
  {
    this.productState.price =value;
  }
  ngOnInit(): void {
    this.productState.current.set(_products[0]);
  }
  constructor(public productState:ProductStateService){
    effect(()=>console.log(this.productState.current()));
  }
  
}



