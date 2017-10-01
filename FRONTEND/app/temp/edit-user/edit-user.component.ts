import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import { User } from '../models/User';
import { UserService } from '../services/user.service';


@Component({
    selector: 'edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

    constructor(
    	private userService: UserService,
    	private route: ActivatedRoute,
    	private router: Router,
    	private location: Location
    ) { }

    public user: User;
    public title: string = "Edit User";
    public validationTrigger: boolean = false;

    public saveUser = (): void => {
    	this.triggerValidation();
    }

    public handleValidationResult(validationResult: boolean) {
    	if (validationResult) {
    		this.userService.saveUser(this.user)
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

    ngOnInit() {
    	this.route.params.subscribe((params: Params) => {
			let userId: number = +params['userId'];

			this.userService.getUser(userId)
				.then(user => this.user = user);
    	});
    }

}
