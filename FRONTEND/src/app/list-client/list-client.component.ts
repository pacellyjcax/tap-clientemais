import { Client } from './../models/Client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  } from '../services/client.service';


@Component({
    selector: 'list-client',
    templateUrl: './list-client.component.html',
    styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

	public client: Client[] = null;

	public selectedClient: Client;

    constructor(
    	private clientService: ClientService,
    	private router: Router
    ) { }

    ngOnInit() {
    	this.userService.getUsers()
    	.then((users: User[]) => {
    		this.users = users;
    	});
    }

    public handleEditUser = (userId: number) => {
    	this.router.navigate(['/edit-user', userId])
    }

    public handleDeleteUser = (userId: number) => {
    	this.userService.deleteUser(userId)
    	.then((result: any) => {
    		this.getUsers();
    	})
    }

    public addNewUser = () => {
    	this.router.navigate(['/create-user'])
    }

    private getUsers = (): void => {
    	this.userService.getUsers()
    	.then((users: User[]) => {
    		this.users = users;
    	});
    }

}
