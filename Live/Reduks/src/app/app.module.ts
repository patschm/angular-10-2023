import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FietsenListComponent } from './fietsen-list/fietsen-list.component';
import { FietsenDetailComponent } from './fietsen-detail/fietsen-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, props, createAction, createActionGroup, createReducer, on, createSelector } from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

//export const selectFietsAction = createAction("[Fietsen] Select", props<{select:string}>());

export interface IFietsState {
  selected:string,
  list:string[]
}

export interface IState {
  fietsen:IFietsState
}

export const fietsActions = createActionGroup({
  source: 'Fietsen',
  events: {
    'Select': props<{select:string}>(),
    'Add': props<{item:string}>()
  }
});

export const fietsSelect = (st:IState)=>st.fietsen.selected;

const fietsReducers = createReducer<IFietsState>(
  {selected:'', list:[]},
  on(fietsActions.add, (state, msg)=>({...state, list:[...state.list, msg.item]})),
  on(fietsActions.select, (state, msg)=>({...state, selected: msg.select}))
);

// function fietsReducer(state:any = {selected:'', list:[]}, msg:any){
//   if (msg.type === "[Fietsen] Select") {
//     return { ...state, selected: msg.payload};
//   }
//   if (msg.type === '[Fietsen] Add'){
//     return {...state, list:[...state.list, msg.payload]};
//   }
//   return state;
// }

@NgModule({
  declarations: [
    AppComponent,
    FietsenListComponent,
    FietsenDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ fietsen:fietsReducers}),
    StoreDevtoolsModule.instrument({maxAge:25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
