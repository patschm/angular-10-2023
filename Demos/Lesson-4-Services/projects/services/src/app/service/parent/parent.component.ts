import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[StateService]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
