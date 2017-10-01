import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { User } from '../models/User';
 
@Injectable()
export class ClientService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = '/api';  // /api
 
  constructor(private http: Http) { }
 
	getUsers(): Promise<User[]> {
		return this.http
		.get(this.url + '/get.php?m=getUsers')
		.toPromise()
		.then(response => response.json().data.map(User.build) as User[])
		.catch(this.handleError);
	}

	getUser(userId: number): Promise<User> {
		return this.http
		.get(this.url + '/get.php?m=getUsers&ui=' + userId)
		.toPromise()
		.then((response) => {
			return response.json().data.map(User.build)[0] as User;
		})
		.catch(this.handleError);
	}

	deleteUser(userId: number): Promise<any> {
		return this.http
		.get(this.url + '/get.php?m=deleteUser&ui=' + userId)
		.toPromise()
		.then((response: Response) => {
			let result = response.json();
		  	if (!!result['isSuccess']) {
		  		return Promise.resolve(result['data']);
		  	} else {
		  		return Promise.reject(result)
		  	}
		})
		.catch(this.handleError)
	}

	createUser(user: User): Promise<any> {
	 let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
	 let body = {
	 	m: 'createUser',
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
	  		return Promise.reject(result)
	  	}
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
  	alert("An error occurred. For detaled information please check the console");
	console.error('An error occured: ', error);
	return Promise.reject(error.message || error);
  }
}