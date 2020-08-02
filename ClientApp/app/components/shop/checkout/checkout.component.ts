import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'ClientApp/app/services/data.service';
import { OrderItem } from 'ClientApp/app/models/order';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-checkout',
  templateUrl: "./checkout.component.html",
  styleUrls: [ "./checkout.component.css"
  ]
})
export class CheckoutComponent implements OnInit {

  
  constructor(public data: DataService, public router: Router) { }
  public items: OrderItem[] = new Array<OrderItem>();
  errorMessage: string = "";

  deleteItem(id: number){
    this.data.deleteFromOrder(id);
  }
  onCheckout() {
    this.data.checkout().subscribe(success=>{
      if(success){
        this.router.navigate([""]);
      }
    },
    err=> this.errorMessage = "Failed to save order");
  }

  getDescription(id: number): string{
    const description = this.data.products.find(p=>p.id==id).artDescription;
    return description;
  }
  ngOnInit(): void {
    this.items = this.data.order.items;
  }

}
