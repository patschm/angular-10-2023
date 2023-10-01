import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestcallsComponent } from './restcalls.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RestInterceptor } from './rest.interceptor';

@NgModule({
  declarations: [RestcallsComponent],
  exports:[RestcallsComponent],
  providers:[{provide: HTTP_INTERCEPTORS, useClass:RestInterceptor, multi:true}],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class RestModule { }
