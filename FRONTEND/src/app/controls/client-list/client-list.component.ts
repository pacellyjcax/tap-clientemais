import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'app/models/Client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(
  ) { }

  @Input() clients: Client[];
  @Output() editUser: EventEmitter<number>= new EventEmitter<number>();
  @Output() deleteUser: EventEmitter<number>= new EventEmitter<number>();

  ngOnInit() 
  {}

  public onEditClientPressed(clientId: number) {
    this.editUser.emit(clientId)
  }

  public onDeleteClientPressed(clientId: number) {
    this.deleteUser.emit(clientId)
  }
  
}
