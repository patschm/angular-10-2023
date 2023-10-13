import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public data$:Observable<string> = EMPTY;

  constructor(private route:ActivatedRoute){
    this.data$ = route.data.pipe(map((dt:any)=>dt.data));
  }
}
