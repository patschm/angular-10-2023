import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public get messages$():Observable<string[]> {
    return this.messages;
  }

  public send(msg:string)
  {
    this.messages.next([...this.messages.value, msg])
  }
  public delete(msg:string)
  {
    this.messages.next([...this.messages.value.filter(m=>m !== msg)]);
  }
}
