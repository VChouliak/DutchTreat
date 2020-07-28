import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/services/data.service';
import {Product} from '../../../models/product'

@Component({
  selector: 'product-list',
  templateUrl: "./productList.component.html",
  styleUrls: [
    "./productList.component.css"
  ]
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];
 
  constructor(private data: DataService) { 
    this.products = data.products;
  }

  addProduct(product: Product){
    this.data.addToOrder(product);
  }

  ngOnInit(): void {
    this.data.loadProducts().subscribe(
      success=>{
        if(success){
          this.products = this.data.products;
        }
      },
      error => {
        console.log(error)
      }
    );
  }

}
