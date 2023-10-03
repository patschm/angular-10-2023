import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlsOf } from 'projects/reactive/tools/controlsOf';

interface IUser {
  name:FormControl<string|null>,
  age: FormControl<number|null>
}
interface IUser2 {
  name:string,
  age:number
}

@Component({
  selector: 'app-typed',
  templateUrl: './typed.component.html',
  styleUrls: ['./typed.component.css']
})
export class TypedComponent {
  public text:FormControl<string|null> = new FormControl('', Validators.required);

  public theForm:FormGroup = new FormGroup<IUser>({
    name: new FormControl<string|null>('', [Validators.required]),
    age:new FormControl<number|null>(0, [Validators.min(18), Validators.max(65)])
  });

  public theForm2 = new FormGroup<ControlsOf<IUser2>>({
    name: new FormControl<string>('', {nonNullable:true, validators:[Validators.required]}),
    age:new FormControl<number>(0, {nonNullable:true, validators: [Validators.min(18), Validators.max(65)]})
  });

  public submit()
  {
    console.log(this.theForm.value);
    this.theForm.reset();
  }
}
