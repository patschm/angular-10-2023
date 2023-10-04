import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap, tap } from 'rxjs';
import { OverviewActions } from '../actions/overview.actions';
import { DataService } from '../../services/data.service';



@Injectable()
export class BiljardEffects {
  showall$ = createEffect(()=>this.actions$.pipe(tap(console.log)), {dispatch:false});
  loading$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(OverviewActions.fetch),
      switchMap(a=>this.svc.loadData().pipe(map((dt:string[])=>OverviewActions.loaded({items:dt}))))
    );
  });
  empty = createEffect(()=>{
    return of({type:'Empty'});
  }, {dispatch:true});

  constructor(private actions$: Actions, private svc: DataService) {}
}
