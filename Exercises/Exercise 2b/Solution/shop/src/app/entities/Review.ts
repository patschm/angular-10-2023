export class Review
{
    public productID : Number;
    public author: string;
    public text:string;
    public score:number;

    constructor(){
        this.productID = 0;
        this.author = "";
        this.score = 0;
        this.text = "";
    }
}