import { ListClientComponent } from './list-client/list-client.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { AuthGuard } from './guards/auth.guard';
import { CreateClientComponent } from 'app/create-client/create-client.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login',  component: LoginComponent },
	{ path: 'clientes',  component: ListClientComponent },	
	{ path: 'list',  component: ListComponent },
	{ path: 'edit-user/:_id', component: EditUserComponent },
	{ path: 'create-user', component: CreateUserComponent},
	{ path: 'create-client', component: CreateClientComponent},
	{ path: '*', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
