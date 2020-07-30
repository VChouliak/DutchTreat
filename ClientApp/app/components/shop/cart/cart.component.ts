import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"
  ]
})
export class CartComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  onCheckout(){
    if(this.data.loginRequired){
      this.router.navigate(["login"]);
    }else{
      this.router.navigate(["checkout"]);
    }
  }
  ngOnInit(): void {
  }

  get getData(){
    return this.data;
  }
}
