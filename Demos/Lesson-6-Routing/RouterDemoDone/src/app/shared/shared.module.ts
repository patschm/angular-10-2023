import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './components/support/support.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [NotfoundComponent, SupportComponent],
  exports:[NotfoundComponent, SupportComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
