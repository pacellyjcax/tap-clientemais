import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AppHeaderComponent } from './controls/app-header/app-header.component';
import { UserFormComponent } from './controls/user-form/user-form.component';
import { UsersListComponent } from './controls/users-list/users-list.component';

import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientFormComponent } from './controls/client-form/client-form.component';
import { ClientListComponent } from './controls/client-list/client-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        EditUserComponent,
        CreateUserComponent,
        AppHeaderComponent,
        UserFormComponent,
        UsersListComponent,
        LoginComponent,
        CreateClientComponent,
        EditClientComponent,
        ClientFormComponent,
        ClientListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
    	UserService,
        DatePipe,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
