import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/shop/product-list/product-list.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/shop/cart/cart.component';
import { ShopComponent} from './components/shop/shop.component'
import {CheckoutComponent} from './components/shop/checkout/checkout.component'
import { RouterModule } from '@angular/router';

const routes = [
  {path: "", component: ShopComponent},
  {path: "checkout", component: CheckoutComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ShopComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
    })
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
