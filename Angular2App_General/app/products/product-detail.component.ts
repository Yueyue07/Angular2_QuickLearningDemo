import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './product.service';

import { IProduct } from './product';

@Component({
    // no selector because we don't need to nest this component
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    // properties
    pageTitle:string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    // constructor
    // add dependency of other function into class
    constructor (private _route: ActivatedRoute,
                 private _router: Router,
                 private _productService: ProductService) {
        console.log('id: ' + typeof this._route.snapshot.params['id']);
    }

    // methods
    // LifeCyclye: ngInit to retrieve data from service
    ngOnInit(): void {
        // let id = +this._route.snapshot.params['id']; //+ convert string to number
        // console.log(`id: ${id}`);
        // this.pageTitle += `: ${id}`;
        console.log(`product-detail init: ${this._route.params}`);
        console.log(this._route.snapshot);
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            })
    } 

    getProduct(id: number) {
        console.log(`productId: ${id}`);
        this._productService.getProductById(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any> error
        );
    }

    // function coming from Router to navigate back to certain page
    onBack() : void {
        this._router.navigate(['/products']);
    } 

    onRatingClicked(event: string): void{
        console.log(event)
    }
}