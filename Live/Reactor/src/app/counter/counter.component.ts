import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, delay, filter, interval, map, of, tap, throttle, throttleTime } from 'rxjs';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';
import { takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
  private subs:Subscription = EMPTY_SUBSCRIPTION;
  public getal:number = 0;
  public data$:BehaviorSubject<number> = new BehaviorSubject(this.getal);
  public counter$:Observable<number> = interval(100);
  public text: string = '';

  public schop(){
    this.data$.next(++this.getal);
  }

  public rustCall(x:number)
  {
    return of(x).pipe(delay(1000), map(nr=>'From Service ' + nr))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.counter$.subscribe(nr=>{
      this.getal = nr;
      this.rustCall(this.getal)
      .subscribe(xx=>this.text = xx)

    });
    
    //this.counter$.subscribe(x=>this.rustCall(x).subscribe(xx=>this.text = xx));



   // this.subs = this.data$.subscribe(v=>console.log(v));

    // this.counter$.pipe(
    //     takeUntilDestroyed(this.byref), // Naar kijken
    //     tap(nr=>console.log(nr)),
    //     map(d=>'data: '+d), 
    //     filter((x,nr)=>nr % 2 == 0 ), 
    //     throttleTime(1000))
    //   .subscribe(nr=>this.text = nr);
  }

  constructor(private byref:DestroyRef)
  {}
}
