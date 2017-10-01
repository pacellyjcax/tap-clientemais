import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentToken = JSON.parse(localStorage.getItem('token'));
        this.token = currentToken;
    }

    login(email: string, password: string): Observable<boolean> {
        return this.http.post('http://localhost:9000/auth/local', { "email": email, "password": password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', JSON.stringify(token));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('token');
    }
}