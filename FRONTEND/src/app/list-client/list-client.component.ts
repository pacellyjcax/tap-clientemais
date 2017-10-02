import { Client } from './../models/Client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './../services/client.service';


@Component({
    selector: 'list-clients',
    templateUrl: './list-client.component.html',
    styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

	public clients: Client[] = null;

	public selectedClient: Client;

    constructor(
    	private clientService: ClientService,
    	private router: Router
    ) { }

    ngOnInit() {
    	this.clientService.getClients()
    	.then((clients: Client[]) => {
    		this.clients = clients;
    	});
    }

    public handleEditClient = (_id: number) => {
    	this.router.navigate(['/edit-client', _id])
    }

    public handleClientDelete = (_id: number) => {
    	this.clientService.deleteClient(_id)
    	.then((result: any) => {
    		this.getClients();
    	})
    }

    public addNewClient = () => {
    	this.router.navigate(['/create-client'])
    }

    private getClients = (): void => {
    	this.clientService.getClients()
    	.then((clients: Client[]) => {
    		this.clients = clients;
    	});
    }

}
