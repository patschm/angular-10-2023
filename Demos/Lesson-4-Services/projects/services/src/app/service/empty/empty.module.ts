import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../state.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[{provide:StateService, useClass:StateService}]
})
export class EmptyModule { }
