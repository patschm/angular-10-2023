import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IState, fietsActions, fietsSelect } from '../app.module';

@Component({
  selector: 'app-fietsen-detail',
  templateUrl: './fietsen-detail.component.html',
  styleUrls: ['./fietsen-detail.component.css']
})
export class FietsenDetailComponent {
  public fiets:FormControl<string> = new FormControl('', {nonNullable:true});

  public onAdd()
  {
    this.store.dispatch(fietsActions.add({item:this.fiets.value}));
  }

  constructor(private store:Store<IState>)
  {   
    this.store.select(fietsSelect).pipe(takeUntilDestroyed()).subscribe(st=>this.fiets.setValue(st));
  }
  
}

