import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-main></app-main>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Roeter';
  ngOnInit(): void {
    console.log(this.router.config)
  }
  constructor(private router: Router){}
}
