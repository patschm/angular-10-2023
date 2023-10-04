import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.development';
import { IState, overviewReducer } from './state';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { BiljardEffects } from './state/effects/biljard.effects';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot<IState>({overview:overviewReducer}),
    EffectsModule.forRoot([BiljardEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
