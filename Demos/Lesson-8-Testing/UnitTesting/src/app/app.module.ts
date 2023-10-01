import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseModule } from './base/base-module.module';
import { SubModule } from './sub/sub.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    SubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
