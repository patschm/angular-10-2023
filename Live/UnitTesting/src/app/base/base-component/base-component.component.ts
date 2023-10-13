import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message-service.service';


@Component({
  selector: 'app-base',
  templateUrl: './base-component.html',
  styles: [
  ]
})
export class BaseComponent implements OnInit {
  message: string = '';
  
  onSend(evt:any)
  {
    this.msgService.send(this.message);
  }

  ngOnInit(): void {
    
  }
  constructor(private msgService: MessageService) {   
  }
}
