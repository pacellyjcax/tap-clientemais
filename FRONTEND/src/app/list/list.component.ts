import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	public users: User[] = null;

	public selectedUser: User;

    constructor(
    	private userService: UserService,
    	private router: Router
    ) { }

    ngOnInit() {
    	this.userService.getUsers()
    	.then((users: User[]) => {
			console.log(users);
    		this.users = users;
    	});
    }

    public handleEditUser = (_id: string) => {
    	this.router.navigate(['/edit-user', _id])
    }

    public handleDeleteUser = (_id: string) => {
    	this.userService.deleteUser(_id)
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
