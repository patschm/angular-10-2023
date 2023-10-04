import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IState } from '../state/interfaces';
import { OverviewActions } from '../state';
import { overviewSelectedSelector } from '../state/selectors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit 
{
  public data: FormControl<string|null> = new FormControl('');

  public onPost() {
    if (this.data.value != null)
      this.store.dispatch(OverviewActions.add({item:this.data.value}));
  }

  ngOnInit(): void {
    this.store.select(overviewSelectedSelector).subscribe(state=>this.data.setValue(state));
  }
  constructor(private store: Store<IState>){}
}
