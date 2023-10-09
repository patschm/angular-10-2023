import { Component } from '@angular/core';
import { takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-main2',
  templateUrl:'./main2.component.html',
  styles: []
})
export class Main2Component
{
  public someNr:number = 0;
  public navigate(nr:number)
  {
    this.router.navigate(['./main2', nr], {skipLocationChange:true});
  }
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.pipe(takeUntilDestroyed())
      .subscribe(params=>this.someNr = +params['nr']);
    //this.someNr = this.route.snapshot.params['nr'];
   }
}
