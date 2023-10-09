import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { Main1Component } from './components/main1/main1.component';
import { Main2Component } from './components/main2/main2.component';
import { Main3Component } from './components/main3/main3.component';



@NgModule({
  declarations: [MainComponent, Main1Component, Main2Component, Main3Component],
  exports: [MainComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
