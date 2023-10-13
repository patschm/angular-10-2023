import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-main2',
  templateUrl:'./main2.component.html',
  styles: []
})
export class Main2Component implements OnInit 
{
  public someNr:number = 0;
  public isActive:boolean = true;

  public navigate(nr:number)
  {
    this.rrouer.navigate(['/main2', nr])
  }
  constructor(private ar:ActivatedRoute, private rrouer:Router) {
    this.ar.params.pipe(takeUntilDestroyed()).subscribe(pm=>this.someNr = pm['id']);
    //this.someNr = +this.ar.snapshot.paramMap.get('id')!;
   }

  ngOnInit()
  {
    
  }
}
