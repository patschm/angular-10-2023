import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Review } from "../entities";

export interface IReviewViewModel {
    author: FormControl<string|null>,
    text: FormControl<string|null>,
    score:FormControl<number>
}

export class ReviewViewModel extends FormGroup<IReviewViewModel>
{
    public get author()
    {
        return super.controls.author;
    }

    public get review() : Review {
        return super.getRawValue() as Review;
    }
    constructor(data: Review)
    {
        super({
            author: new FormControl<string>(data.author, Validators.required),
            text: new FormControl(data.text, Validators.required),
            score: new FormControl(data.score, {
              nonNullable:true, 
              validators: [Validators.min(0), Validators.max(5), Validators.required]})
          });
    }
}