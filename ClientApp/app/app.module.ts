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
import {LoginComponent} from './components/login/login.component'
import { FormsModule }   from '@angular/forms';

const routes = [
  {path: "", component: ShopComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "login", component: LoginComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ShopComponent,
    CheckoutComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
    }),
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
