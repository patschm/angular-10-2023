import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';

export const saved: CanDeactivateFn<Main2Component> = (comp: Main2Component, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot)=>{
  return false;
};


@Component({
  selector: 'app-main2',
  template: `<h1>Main 2</h1>`,
  styles: []
})
export class Main2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
