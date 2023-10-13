import { Injectable } from '@angular/core';
import { Observable, Subject, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Product} from '../entities/entities';

@Injectable({
    providedIn:'root'
})
export class ProductService
{
    private selected:Subject<Product> = new Subject();

    public get selectedProduct$() : Observable<Product>
    {
        return this.selected;
    }
    public set selectedProduct$(value: Product)
    {
        this.selected.next(value);
    }
    public selectProduct (pid:number)
    {
        this.getProduct$(pid).subscribe(p=>this.selectedProduct$ = p);
    }
    public getProduct$(pid: number): Observable<Product>
    {
        return this.http.get<Product>("https://localhost:5001/products/"+pid);
    }
    public getProducts$(pgid:number): Observable<Product[]>
    {
        return this.http.get<Product[]>('https://localhost:5001/products/all/' + pgid);
    }

    constructor(private http:HttpClient){}
}
