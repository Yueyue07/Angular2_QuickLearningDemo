"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductDetailComponent = (function () {
    // constructor
    // add dependency of other function into class
    function ProductDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        // properties
        this.pageTitle = 'Product Detail';
        console.log('id: ' + typeof this._route.snapshot.params['id']);
    }
    // methods
    // LifeCyclye: ngInit to retrieve data from service
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // let id = +this._route.snapshot.params['id']; //+ convert string to number
        // console.log(`id: ${id}`);
        // this.pageTitle += `: ${id}`;
        console.log("product-detail init: " + this._route.params);
        console.log(this._route.snapshot);
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        console.log("productId: " + id);
        this._productService.getProductById(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    // function coming from Router to navigate back to certain page
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (event) {
        console.log(event);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        // no selector because we don't need to nest this component
        templateUrl: 'app/products/product-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map