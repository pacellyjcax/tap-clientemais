import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AppHeaderComponent } from './controls/app-header/app-header.component';
import { UserFormComponent } from './controls/user-form/user-form.component';
import { UsersListComponent } from './controls/users-list/users-list.component';

import { UserService } from './services/user.service';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        EditUserComponent,
        CreateUserComponent,
        AppHeaderComponent,
        UserFormComponent,
        UsersListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
    	UserService,
    	DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
