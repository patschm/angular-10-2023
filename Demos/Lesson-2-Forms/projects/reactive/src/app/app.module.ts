import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive.component';
import { TypedComponent } from './typed/typed.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    TypedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
