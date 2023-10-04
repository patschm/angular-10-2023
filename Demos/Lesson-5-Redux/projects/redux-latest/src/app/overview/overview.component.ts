import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IState } from '../state/interfaces';
import { OverviewActions } from '../state';
import { overviewItemsSelector } from '../state/selectors';

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
    if (selected != null)
      this.store.dispatch(OverviewActions.select({item:selected}));
  }
  public ngOnInit(): void {
    this.store.dispatch(OverviewActions.fetch());  
  }
  public ngDoCheck(): void {
    if (!this.init && this.items != null && this.items?.length > 0)
    {
      this.init = true;
      this.onSelect(0);
    }
  }
  constructor(private store:Store<IState>)
  {  
    this.store.select(overviewItemsSelector).pipe(takeUntilDestroyed()).subscribe(state=>this.items = state);
  } 
}
