import { Client } from './../../models/Client';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  constructor(
    private datePipe: DatePipe
  ) { }

  @Input() client: Client;
  @Input() validationTrigger: boolean = false;
  @Output() onValidationFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

  public nameValidationErrorMessage: string = "";
  public emailValidationErrorMessage: string = "";
  public phoneNumberValidationErrorMessage: string = "";


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange )  {
    if (changes.hasOwnProperty('validationTrigger') && changes['validationTrigger'].previousValue !== undefined) {
      this.validateUser();
    }
  }

public validateUser = () => {
  this.clearMessages();

  let isValid = true;
  if (!this.client.name.length) {
    isValid = false;
    this.nameValidationErrorMessage = "Name should contain at least 1 character";
  } else if (this.client.name.length > 100) {
    isValid = false;
    this.nameValidationErrorMessage = "Name should not be more than 100 characters";
  }

  if (!this.client.email.length) {
    isValid = false;
    this.emailValidationErrorMessage = "Email should contain at least 1 character";
  } else if (this.client.email.length > 50) {
    isValid = false;
    this.emailValidationErrorMessage = "Email should not be more than 50 characters";
  }

  if (!this.client.phoneNumber.length) {
    isValid = false;
    this.phoneNumberValidationErrorMessage = "Role should contain at least 1 character";
  } else if (this.client.phoneNumber.length > 12) {
    isValid = false;
    this.phoneNumberValidationErrorMessage = "Phone Number should not be more than 12 characters";
  }
}

private clearMessages = () => {
    this.nameValidationErrorMessage = "";
    this.emailValidationErrorMessage = "";
    this.phoneNumberValidationErrorMessage = "";
}

}
