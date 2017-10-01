import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "../../models/User";

@Component({
    selector: 'users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    constructor(
    ) { }

    @Input() users: User[];
    @Output() editUser: EventEmitter<number>= new EventEmitter<number>();
    @Output() deleteUser: EventEmitter<number>= new EventEmitter<number>();

    ngOnInit() {

    }

    public onEditUserPressed(userId: number) {
    	this.editUser.emit(userId)
    }

    public onDeleteUserPressed(userId: number) {
    	this.deleteUser.emit(userId)
    }

}
