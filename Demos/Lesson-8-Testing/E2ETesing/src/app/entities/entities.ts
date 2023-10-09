export class Brand
{
    public id:number;
    public name:string;

    constructor()
    {
        this.id = 0;
        this.name = "";
    }
}

export class ProductGroup
{
    public id: number;
    public name: string;
    public image: string;

    constructor()
    {
        this.id = 0;
        this.name = "";
        this.image = "";
    }
}

export class Specification
{
    public key:string;
    public value:string;

    constructor(){
        this.key = "";
        this.value = "";
    }
}
export class Product
{
    public id:number;
    public brand:Brand;
    public name:string;
    public productGroup:ProductGroup;
    public score: number;
    public image:string;   
    public specifications:Specification[] = [];   

    constructor()
    {
        this.id = 0;
        this.brand = new Brand();
        this.image = "";
        this.name = "";
        this.productGroup = new ProductGroup();
        this.score = 0;
    }
}