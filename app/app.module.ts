import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component'
import { StarComponent } from './shared/star.component';

const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id',component: ProductDetailComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             HttpModule,
             RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, WelcomeComponent, ProductListComponent, ProductFilterPipe, ProductDetailComponent, StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
