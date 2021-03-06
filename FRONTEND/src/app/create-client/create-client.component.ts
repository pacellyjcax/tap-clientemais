import { Client } from './../models/Client';
import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private router: Router,
    private location: Location
  ) { }


  public title: string = "Create Client"
  public client: Client = new Client();
  public validationTrigger: boolean = false;

  ngOnInit() {

  }

  public addClient() {
    this.triggerValidation();
    this.handleValidationResult(this.validationTrigger);
  }

  public handleValidationResult(validationResult: boolean) {
    if (validationResult) {
            delete this.client._id;
            this.clientService.createClient(this.client)
                .then(
                  (result) => { this.router.navigate(['/clientes']) }
                )
                 this.router.navigate(['/clientes'])      
            }
  }

  public back() {
    this.location.back();
  }

  private triggerValidation(): void  {
    this.validationTrigger = !this.validationTrigger;
  }

}
