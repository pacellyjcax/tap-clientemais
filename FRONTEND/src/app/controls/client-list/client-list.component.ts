import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'app/models/Client';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(
  ) { }

  @Input() clients: Client[];
  @Output() editClient: EventEmitter<number>= new EventEmitter<number>();
  @Output() deleteClient: EventEmitter<number>= new EventEmitter<number>();

  ngOnInit() 
  {}

  public onEditClientPressed(_id: number) {
    this.editClient.emit(_id)
  }

  public onDeleteClientPressed(_id: number) {
    this.deleteClient.emit(_id)
  }
  
}
