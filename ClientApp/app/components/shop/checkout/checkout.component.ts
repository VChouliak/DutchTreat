import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'ClientApp/app/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: "./checkout.component.html",
  styleUrls: [ "./checkout.component.css"
  ]
})
export class CheckoutComponent implements OnInit {

  constructor(public data: DataService, public router: Router) { }

  errorMessage: string = "";

  onCheckout() {
    
  }

  ngOnInit(): void {
  }

}
