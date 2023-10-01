import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-base></app-base>
    <hr/>
    <app-sub></app-sub>
  `,
  styles: []
})
export class AppComponent {
  title = 'UnitTesting';
}
