import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductgroupModule } from './features/productgroup/productgroup.module';
import { ReviewModule } from './features/review/review.module';
import { ENDPOINTS, IENDPOINTS } from './core/constants';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducermap } from './store/reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    StoreModule.forRoot(reducermap),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserModule,
    AppRoutingModule,
    ProductgroupModule,
    ReviewModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ provide: IENDPOINTS, useValue: ENDPOINTS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
