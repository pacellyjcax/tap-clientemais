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

    public firstNameValidationErrorMessage: string = "";
    public lastNameValidationErrorMessage: string = "";
    public addressValidationErrorMessage: string = "";
    public dateOfBirthValidationErrorMessage: string = "";
    public dateOfHireValidationErrorMessage: string = "";

    public dateOfBirth: Date;
    public dateOfHire: Date;

    ngOnInit() {
    	if (this.user.dateOfBirth.length) {
    		this.dateOfBirth = new Date(this.user.dateOfBirth);
    	}
    	if (this.user.dateOfHire.length) {
    		this.dateOfHire = new Date(this.user.dateOfHire);
    	}
    }

    ngOnChanges(changes: SimpleChange )  {
    	if (changes.hasOwnProperty('validationTrigger') && changes['validationTrigger'].previousValue !== undefined) {
    		this.validateUser();
    	}
    }

	public validateUser = () => {
		this.clearMessages();

		let isValid = true;
		if (!this.user.firstName.length) {
			isValid = false;
			this.firstNameValidationErrorMessage = "First Name should contain at least 1 character";
		} else if (this.user.firstName.length > 50) {
			isValid = false;
			this.firstNameValidationErrorMessage = "First Name should not be more than 50 characters";
		}

		if (!this.user.lastName.length) {
			isValid = false;
			this.lastNameValidationErrorMessage = "Last Name should contain at least 1 character";
		} else if (this.user.lastName.length > 50) {
			isValid = false;
			this.lastNameValidationErrorMessage = "Last Name should not be more than 50 characters";
		}

		if (!this.user.address.length) {
			isValid = false;
			this.addressValidationErrorMessage = "Address should contain at least 1 character";
		} else if (this.user.lastName.length > 100) {
			isValid = false;
			this.addressValidationErrorMessage = "Last Name should not be more than 100 characters";
		}

		if (this.dateOfBirth == undefined) {
			this.dateOfBirthValidationErrorMessage = "Date of birth is not a valid date";
		} else if (new Date(this.dateOfBirth).getTime() > Date.now()) {
			this.dateOfBirthValidationErrorMessage = "Date of birth cannot be more then the current date";
			isValid = false;
		}

		if (this.dateOfHire == undefined) {
			this.dateOfHireValidationErrorMessage = "Date of hire is not a valid date";
		} else if (new Date(this.dateOfHire).getTime() > Date.now()) {
			this.dateOfHireValidationErrorMessage = "Date of hire cannot be less then the current date";
			isValid = false;
		}

		if (isValid) {
			this.user.dateOfBirth = this.datePipe.transform(this.dateOfBirth, "yyyy-MM-dd");
			this.user.dateOfHire = this.datePipe.transform(this.dateOfHire, "yyyy-MM-dd");
			this.onValidationFinished.emit(true);
		} else {
			this.onValidationFinished.emit(false);
		}
	}

	private clearMessages = () => {
		this.firstNameValidationErrorMessage = "";
    	this.lastNameValidationErrorMessage = "";
    	this.dateOfBirthValidationErrorMessage = "";
    	this.dateOfHireValidationErrorMessage = "";
	}

}
