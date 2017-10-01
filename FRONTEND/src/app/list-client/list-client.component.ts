import { Client } from './../models/Client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';


@Component({
    selector: 'list-client',
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

    public handleEditUser = (userId: number) => {
    	this.router.navigate(['/edit-user', userId])
    }

    public handleClientUser = (userId: number) => {
    	this.clientService.deleteClient(userId)
    	.then((result: any) => {
    		this.getUsers();
    	})
    }

    public handleClientUser = () => {
    	this.router.navigate(['/create-user'])
    }

    private getUsers = (): void => {
    	this.clientService.getClients()
    	.then((clients: Client[]) => {
    		this.clients = clients;
    	});
    }

}
