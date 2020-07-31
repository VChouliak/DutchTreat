import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: "./navbar.component.html",
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
  
  get isLogedIn(){
    return this.data.loginRequired;
  }
}
