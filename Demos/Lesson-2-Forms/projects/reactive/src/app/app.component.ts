import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-reactive></app-reactive>
    <app-typed></app-typed>
  `,
  styles: []
})
export class AppComponent {
  title = 'Reactive';
}
