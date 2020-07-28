import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/services/data.service';

@Component({
  selector: 'product-list',
  templateUrl: "./productList.component.html",
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

  public products = [];
  constructor(private data: DataService) { 
    this.products = data.products;
  }

  ngOnInit(): void {
  }

}
