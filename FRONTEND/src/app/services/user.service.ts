import { AuthenticationService } from './authentication.service';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
 
import { User } from '../models/User';
 
@Injectable()
export class UserService {
  	
  private url = 'http://localhost:9000/api/users';  // /api
  

 
  constructor(private http: Http) {
   }
 
	getUsers(): Promise<User[]> {

		let headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')});
		return this.http
		.get(this.url,{headers: headers})
		.toPromise()
		.then(response => response.json() as User[])
		.catch(this.handleError);
	}

	getUser(_id: string): Promise<User> {
		return this.http
		.get(this.url + '/' + _id)
		.toPromise()
		.then((response) => {
			return response.json() as User;
		})
		.catch(this.handleError);
	}

	getUserProfile(): Promise<User> {
		let headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')});		
		return this.http
		.get(this.url + '/me', {headers: headers})
		.toPromise()
		.then((response) => {
			return response.json() as User;
		})
		.catch(this.handleError);
	}

	deleteUser(_id: string): Promise<any> {
		let headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')});		
		return this.http
		.delete(this.url + '/' + _id)
		.toPromise()
		.then((response: Response) => {
			console.log( response.json());
		  	
		})
		.catch(this.handleError)
	}

	createUser(user: User): Promise<any> {
		let headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')});
		return this.http
	  .post(this.url + '/', user, {headers: headers})
	  .toPromise()
	  .then((response: Response) => {
	  
	  })
	  .catch(this.handleError);
	}

	saveUser(user: User): Promise<any> {
		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
		let body = {
			m: 'saveUser',
			user: user
		};
		let data = 'data=' + JSON.stringify(body);
		return this.http
			.post(this.url + '/post.php', data, {headers: headers})
			.toPromise()
			.then((response: Response) => {
				let result = response.json();
				if (!!result['isSuccess']) {
					return Promise.resolve(result['data']);
				} else {
					return Promise.reject(result);
				}
			})
			.catch(this.handleError);
	}
	
  private handleError(error: any): Promise<any> {
	return Promise.reject(error.message || error);
  }
}