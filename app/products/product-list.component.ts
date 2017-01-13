import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html', 
    styleUrls: ['app/products/product-list.component.css'] // Encapsulate
})
export class ProductListComponent implements OnInit { // Using a life cycle hook
    // properties                                     // Import OnInit From angular/core
    pageTitle: string = 'Tutorial List...';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage : boolean = false;
    listFilter : string = '';
    errorMessage: string;
    products: IProduct[];

    // constructor
    constructor(private _productService: ProductService) { // define private variable _productService
        console.log('construct');                          // define ProductService as Data Type
    }


    // methods
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void { //ngOnInit() Life Cycle pass data from services to the varialbe from ProductListComponent
        console.log('In OnInit');
        this._productService.getProducts()
        .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error);
    }
    
    onRatingClicked(message:string): void {
        console.log('onRatingClicked');
        this.pageTitle = 'ProductList: ' + message;
    }


}