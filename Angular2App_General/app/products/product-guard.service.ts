import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable() // inject - service

export class ProductDetailGuard implements CanActivate {

    // constructor
    constructor(private _router: Router) {}
    
    // call canActivate method because of CanActivate implementation
    // ActivatedRouteSnapshot contains the information of route at particular time
    canActivate(route: ActivatedRouteSnapshot): boolean {
        //console.log(route);
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1 || id > 10) {
            this._router.navigate(['/products']);
            return false
        }
        return true;
    }
}

