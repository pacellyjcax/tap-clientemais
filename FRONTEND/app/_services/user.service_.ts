import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './index';
import { User } from '../_models/user_';

@Injectable()
export class UserService {
    private resourceUrl = 'localhost:27017/api/users';
    private SERVER_API_URL = 'localhost:27017';

    constructor(private http: Http) { }

    create(user: User): Observable<User> {
        return this.http.post(this.resourceUrl, user)
            .map((res: Response) => this.convertResponse(res));
    }

    update(user: User): Observable<User> {
        return this.http.put(this.resourceUrl, user)
            .map((res: Response) => this.convertResponse(res));
    }

    find(login: string): Observable<User> {
        return this.http.get(`${this.resourceUrl}/${login}`).map((res: Response) => res.json());
    }

    delete(login: string): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${login}`);
    }

    authorities(): Observable<string[]> {
        return this.http.get(this.SERVER_API_URL + 'api/users/authorities').map((res: Response) => {
            const json = res.json();
            return <string[]> json;
        });
    }

    private convertResponse(res: Response): User {
        return new User(res.json());
    }
}