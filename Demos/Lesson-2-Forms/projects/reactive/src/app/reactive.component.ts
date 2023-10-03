import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public theForm: FormGroup;
  public theForm2: FormGroup;

  public name: string = "Joan";
  public age: number = 34;

  public submit() {
    if (this.theForm.valid) {
      Object.assign(this, this.theForm.value);
      console.log(`${this.name} (${this.age})`);
      this.theForm.reset();
    }
  }

  public get form() {
    return {
      name: this.theForm.get("name"),
      age: this.theForm.get("age")
    };

    return {
      name:this.theForm2.value.name,
      age:this.theForm2.value.age
    };
  }

  constructor(private bld: FormBuilder) {
    this.theForm = this.bld.group({
      "name": ["", Validators.required],
      "age": [0, [Validators.min(18), Validators.max(123)]]
    });

    // Typed Forms
    this.theForm2 = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      age: new FormControl<number>(0, [Validators.min(18), Validators.max(65)])
    });
  }

  ngOnInit() {
  }

}
