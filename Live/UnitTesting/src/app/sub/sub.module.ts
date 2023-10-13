import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub/sub.component';



@NgModule({
  declarations: [
    SubComponent
  ],
  exports:[SubComponent],
  imports: [
    CommonModule
  ]
})
export class SubModule { }
