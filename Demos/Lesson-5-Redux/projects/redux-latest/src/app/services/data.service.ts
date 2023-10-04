import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data:string[] = ["Item 1", "Item 2", "Item 3", "Item 4"];
  
  public loadData():Observable<string[]> {
    return of(this.data).pipe(delay(1000));
  }
  constructor() { }
}
