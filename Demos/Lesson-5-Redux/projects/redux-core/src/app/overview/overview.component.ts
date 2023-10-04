import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, DoCheck
{
  private init: boolean = false;
  public items:string[]|null = null;

  public onSelect(item:number) {
    const selected = this.items?.[item];
    this.store.dispatch({type:'Select', payload:selected});
  }
  public ngOnInit(): void {
    this.store.dispatch({type:'Fetch'});  
  }
  public ngDoCheck(): void {
    if (!this.init && this.items != null && this.items?.length > 0)
    {
      this.init = true;
      this.onSelect(0);
    }
  }
  constructor(private store:Store<any>)
  {  
    this.store.pipe(takeUntilDestroyed()).subscribe(state=>this.items = state.overview.data);
  } 
}
