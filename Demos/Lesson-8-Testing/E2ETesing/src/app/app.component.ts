import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <nav class="navbar  navbar-expand-lg  navbar-dark bg-dark" role="navigation">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" routerLink="/overview" routerLinkActive="active">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/detail', 590164]" routerLinkActive="active">Detail</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'web-shop';
}
