import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { Actions, EffectsModule, createEffect } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { exhaustMap, filter, map, of, tap } from 'rxjs';
import { DataService } from './services/data.service';
import { ReactiveFormsModule } from '@angular/forms';

function handleOverview(state:any={selected:'0', data:[]}, action:any)
{
  if (action.type == "Select")
  {
    return {...state, selected:action.payload};
  }
  if (action.type == "Loaded")
  {
    return {...state, data:action.payload};
  }
  if (action.type == "Add")
  {
    return {...state, data:[...state.data, action.payload]};
  }
  
  return state;
}

@Injectable()
export class Biljard
{
  showall = createEffect(()=>this.actions.pipe(tap(console.log)), {dispatch:false});
  loading = createEffect(()=>{
    return this.actions.pipe(
      filter(a=>a.type=='Fetch'),
      exhaustMap(a=>this.svc.loadData().pipe(map(dt=>({type:'Loaded', payload:dt}))))
    );
    //return this.svc.loadData().pipe(map(dt=>({type:'Loaded', payload:dt})));
  });
  empty = createEffect(()=>{
    return of({type:'Empty'});
  }, {dispatch:true});
  constructor(private actions:Actions, private svc:DataService){}
}


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    StoreModule.forRoot({
      overview:handleOverview
    }),
    EffectsModule.forRoot([Biljard]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
