import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: "./productList.component.html",
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
