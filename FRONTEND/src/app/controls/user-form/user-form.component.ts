import { Component, Input, Output, OnInit, SimpleChange, EventEmitter } from '@angular/core';
import { User } from "../../models/User";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    constructor(
    	private datePipe: DatePipe
    ) { }

    @Input() user: User;
    @Input() validationTrigger: boolean = false;
    @Output() onValidationFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

    public nameValidationErrorMessage: string = "";
    public emailValidationErrorMessage: string = "";
    public roleValidationErrorMessage: string = "";


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
		if (!this.user.name.length) {
			isValid = false;
			this.nameValidationErrorMessage = "Name should contain at least 1 character";
		} else if (this.user.firstName.length > 100) {
			isValid = false;
			this.nameValidationErrorMessage = "Name should not be more than 100 characters";
		}

		if (!this.user.email.length) {
			isValid = false;
			this.emailValidationErrorMessage = "Email should contain at least 1 character";
		} else if (this.user.lastName.length > 50) {
			isValid = false;
			this.emailValidationErrorMessage = "Email should not be more than 50 characters";
		}

		if (!this.user.role.length) {
			isValid = false;
			this.roleValidationErrorMessage = "Role should contain at least 1 character";
		} else if (this.user.role.length > 50) {
			isValid = false;
			this.roleValidationErrorMessage = "Role should not be more than 50 characters";
		}
	}

	private clearMessages = () => {
    	this.nameValidationErrorMessage = "";
    	this.emailValidationErrorMessage = "";
    	this.roleValidationErrorMessage = "";
	}

}
