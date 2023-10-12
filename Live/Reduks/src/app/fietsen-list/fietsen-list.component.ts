import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { IState, fietsActions } from '../app.module';

@Component({
  selector: 'app-fietsen-list',
  templateUrl: './fietsen-list.component.html',
  styleUrls: ['./fietsen-list.component.css']
})
export class FietsenListComponent {
  public fietsen$:Observable<string[]> = EMPTY;

  public select(merk:string){
    this.store.dispatch(fietsActions.select({ select:merk}));
  }

  constructor(private store:Store<IState>){
    this.fietsen$ = store.select(st=>st.fietsen.list);
  }
}
