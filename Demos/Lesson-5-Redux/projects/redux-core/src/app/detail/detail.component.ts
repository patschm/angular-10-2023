import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  
{
  public data: FormControl<string|null> = new FormControl('');

  public onPost() {
    this.store.dispatch({type:"Add", payload:this.data.value});
  }

  constructor(private store: Store<any>){
    this.store.subscribe(state=>this.data.setValue(state.overview.selected));
  }
}
