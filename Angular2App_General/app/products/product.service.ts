import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductService {

    // define url to retrieve data from our server 
    private _productUrl = 'api/products/products.json';

    // construct: add Http Dependency to the ProductService
    constructor(private _http: Http) {}

    // method
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map(this.extractData)
            // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getProductById(id: number): Observable<IProduct> {
        return this.getProducts()
              .map((products:IProduct[]) =>
                products.find(p => p.productId === id));
    }

    private extractData(res: Response) {
        console.log("res: ");
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.json());
        let body = <IProduct[]> res.json();
        console.log(body);
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}
