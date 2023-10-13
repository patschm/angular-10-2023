import { TestService } from "./test.service";

export class Test2Service
{
    public addToo(a:number, b:number): number{
        return this.test.add(a, b);
    }

    constructor(private test: TestService)
    {}
}