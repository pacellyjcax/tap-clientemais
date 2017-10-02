import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private userService : UserService, 
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.userService.getUserProfile()
                    .then(result => {
                        if (result.role === 'usuario') {
                            this.router.navigate(['/clientes']);
                        }else if (result.role === 'administrador'){
                            this.router.navigate(['/list']);
                        } else {
                            this.authenticationService.logout();
                            this.router.navigate(['/login']);
                        }
                    });
                } else {
                    this.error = 'Email or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
