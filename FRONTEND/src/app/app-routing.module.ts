import { ListClientComponent } from './list-client/list-client.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login',  component: LoginComponent },
	{ path: 'clientes',  component: ListClientComponent },	
	{ path: 'list',  component: ListComponent },
	{ path: 'edit-user/:_id', component: EditUserComponent, canActivate: [AuthGuard] },
	{ path: 'create-user', component: CreateUserComponent},
	{ path: '*', redirectTo: '/list', pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
