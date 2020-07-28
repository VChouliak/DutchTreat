import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import{Observable} from 'rxjs'
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  public products: Product[] = []

  loadProducts(): Observable<boolean>{
    return this.http.get("/api/product")
      .pipe(
        map((data: any[]) =>{
          this.products = data;
          return true;
        })
      );      
  }
}
