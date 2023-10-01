import { Injectable, WritableSignal, signal } from '@angular/core';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  public current: WritableSignal<IProduct>=signal({brand:"", name:"", price:0});
  public set price(value:number)
  {
    this.current.mutate(p=>p.price=value);
  }
  public set brand(value:string)
  {
    this.current.mutate(p=>p.brand=value);
  }
  public set name(value:string)
  {
    this.current.mutate(p=>p.name=value);
  }
}
