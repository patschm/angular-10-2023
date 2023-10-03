import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit 
{
  public price: number = 3.456741;
  public today: Date = new Date();
  public text: string = "some text";
  public format: string = '4.3-5';
  
  constructor() { }

  ngOnInit() {
  }

}
