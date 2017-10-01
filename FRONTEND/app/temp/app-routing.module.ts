import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'list',  component: ListComponent },
	{ path: 'edit-user/:userId', component: EditUserComponent },
	{ path: 'create-user', component: CreateUserComponent },
	{ path: '*', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
