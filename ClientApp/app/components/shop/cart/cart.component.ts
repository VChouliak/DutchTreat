import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: "./cart.component.html",
  styles: [
  ]
})
export class CartComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  get getData(){
    return this.data;
  }
}
