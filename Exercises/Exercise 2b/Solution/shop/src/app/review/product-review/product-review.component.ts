import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/entities';
import { IReviewViewModel, ReviewViewModel } from 'src/app/viewmodels/review.viewmodel';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  // TODO: 2 Declare a field reviewForm of type FormGroup
  public reviewForm: FormGroup
  public _review: Review = new Review();
  public submitted = false;

  // public reviewModel = new FormGroup<IReviewViewModel>(
  //   {
  //     author: new FormControl<string>('', Validators.required),
  //     text: new FormControl('', Validators.required),
  //     score: new FormControl(0, {
  //       nonNullable:true, 
  //       validators: [Validators.min(0), Validators.max(5), Validators.required]})
  //   }
  // );
  public reviewModel:FormGroup<IReviewViewModel> = new ReviewViewModel(this._review);

  public onSubmit() {
      this.submitted = true;
      // TODO: 4 Assign values from reviewForm to _review.
      Object.assign(this._review, this.reviewModel.value);
      console.log(this._review);
  }
  // TODO: 3 Inject the FormBuilder and build the reviewForm with the fields:
  //         - score (min:0, max:5, required)
  //         - author (required)
  //         - text (required)
  constructor(private builder: FormBuilder) { 
    this.reviewForm = this.builder.group({
      "score": ["", [Validators.min(0), Validators.max(5), Validators.required]],
      "author": ["", [Validators.required]],
      "text": ["", [Validators.required]]
    });
  }

  public get review():any {
    let map = new Map();
    for(let x in this.reviewForm.controls)
    {
        map.set(x, this.reviewForm.get(x));
    }
    return Object.fromEntries(map);
  }
  public get model():IReviewViewModel {
    let map = new Map();
    for(let x in this.reviewModel.controls)
    {
        map.set(x, this.reviewModel.get(x));
    }
    return Object.fromEntries(map);
  } 

  public get Model():ReviewViewModel{
    return this.reviewModel as ReviewViewModel;
  }
  ngOnInit(): void {
    this._review.author='Jan';
    this._review.score = 2;
    this._review.text='hello';
    //this.reviewModel.setValue(this._review);
    Object.assign(this.reviewModel.value, this._review);
  }
}

