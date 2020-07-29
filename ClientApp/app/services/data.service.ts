import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { Product } from '../models/product';
import { Order, OrderItem } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private token: string = "";
  private tokenExpiration: Date;
  public products: Product[] = []
  public order: Order = new Order();

  constructor(private http: HttpClient) { }

  loadProducts(): Observable<boolean> {
    return this.http.get("/api/product")
      .pipe(
        map((data: any[]) => {
          this.products = data;
          return true;
        })
      );
  }

  public addToOrder(product: Product) {
    let item: OrderItem = this.order.items.find(i => i.productId == product.id);

    if (item) {

      item.quantity++;

    } else {

      item = new OrderItem();
      item.productId = product.id;
      item.productArtist = product.artist;
      item.productCategory = product.category;
      item.productArtId = product.artId;
      item.productTitle = product.title;
      item.productSize = product.size;
      item.unitPrice = product.price;
      item.quantity = 1;

      this.order.items.push(item);
    }
  }

  public get loginRequired(): boolean{
    return this.token.length == 0 || this.tokenExpiration > new Date();
  }

  public login(creds) {
    return this.http.post("/account/createtoken", creds)
      .pipe(
        map((response: any) => {
          let tokenInfo = response;
          this.token = tokenInfo.token;
          this.tokenExpiration = tokenInfo.expiration;
          return true;
        }));
  }
}

