import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    // no selector because we don't need to nest this component
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle:string = 'Product Detail';

}