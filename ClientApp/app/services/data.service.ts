import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products = [
    {
      title: "First Product",
      price: 20.22
    },  
    {
      title: "Second Product",
      price: 21.22
    },  
    {
      title: "Third Product",
      price: 22.22
    }
  ]
  constructor() { }
}
