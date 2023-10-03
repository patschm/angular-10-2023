export interface IIntroducable
{
    introduce():void;
}

export class Person implements IIntroducable
{
    private _firstName: string;

    public get firstName(): string
    {
        return this._firstName;
    }
    public set firstName(value:string)
    {
        this._firstName = value;
    }

    public get lastName(): string
    {
        return this._lastName;
    }
    public set lastName(value:string)
    {
        this._lastName = value;
    }

    public introduce()
    {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    constructor(public age:number, private _lastName:string)
    {

    }
}