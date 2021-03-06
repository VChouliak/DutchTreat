import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: [ "./login.component.css"
  ]
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService, private router:Router) { }
  errorMessage: string = "";
  public creds = {
    username: "",
    password: ""
  };

  onLogin() {
    this.errorMessage = "";
    this.data.login(this.creds)
      .subscribe(success => {
        if (success) {
          if (this.data.order.items.length == 0) {
            this.router.navigate([""]);
          } else {
            this.router.navigate(["checkout"]);
          }
        }
      }, err => this.errorMessage = "Failed to login");
  }
  ngOnInit(): void {
  }

}
