import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { UserService } from '../services/user.service';

@Component({
    selector: 'create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

    constructor(
    	private userService: UserService,
    	private router: Router,
    	private location: Location
    ) { }


    public title: string = "Create User"
    public user: User = new User();
    public validationTrigger: boolean = false;

    ngOnInit() {

    }

    public addUser() {
    	this.triggerValidation();
    }

    public handleValidationResult(validationResult: boolean) {
    	if (validationResult) {
    		this.userService.createUser(this.user)
    			.then(
    				(result) => { this.router.navigate(['/list']) }
    			)
    	}
    }

    public back() {
    	this.location.back();
    }

    private triggerValidation(): void  {
    	this.validationTrigger = !this.validationTrigger;
    }

}
