import { Component, OnInit } from '@angular/core';
import { DataService } from 'ClientApp/app/services/data.service';
import { Contact } from 'ClientApp/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"
  ]
})
export class ContactComponent implements OnInit {

  public errorMessage: string = "";
  public successMessage: string="";
  public contactMessage: Contact = new Contact();

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  sendMessageAndGetResponse(){
    this.data.sendMessage(this.contactMessage).subscribe(
    success=>{
      if(success){
        this.successMessage ="Your message was delivered!!!"
      }else{
        this.successMessage ="Message delivery failed."
      }
    });
  }


}
