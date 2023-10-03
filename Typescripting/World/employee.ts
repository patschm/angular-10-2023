import {Person } from './person';

export class Employee extends Person
{
    constructor(public jobTitle:string)
    {
        super(42, "Jan");
    }
}