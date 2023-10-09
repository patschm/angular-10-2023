import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';
import { MessageService } from 'src/app/core/services/message-service.service';


@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  public messages$: Observable<string[]> = EMPTY;

  public onDelete(msg:string) {
    this.messageService.delete(msg);
  }

  ngOnInit(): void {
    this.messages$ = this.messageService.messages$;
  }
  constructor(private messageService: MessageService) {
  }
}
