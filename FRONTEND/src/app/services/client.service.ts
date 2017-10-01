import { Client } from './../models/Client';
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class ClientService {
 
	private url = 'http://localhost:9000/api/clientes';  // /api
 
  constructor(private http: Http) { }
 
	getClients(): Promise<Client[]> {
		let headers = new Headers({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')});
		return this.http
		.get(this.url,{headers: headers})
		.toPromise()
		.then(response => response.json() as Client[])
		.catch(this.handleError);
	}

	getClient(clientId: number): Promise<Client> {
		return this.http
		.get(this.url + '/get.php?m=getUsers&ui=' + clientId)
		.toPromise()
		.then((response) => {
			return response.json()  as Client;
		})
		.catch(this.handleError);
	}

	deleteClient(clientId: number): Promise<any> {
		return this.http
		.get(this.url + '/get.php?m=deleteUser&ui=' + clientId)
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

	createClient(client: Client): Promise<any> {
	 let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
	 let body = {
	 	m: 'createClient',
	 	client: client
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

	saveClient(client: Client): Promise<any> {
		let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
		let body = {
			m: 'saveUser',
			client: client
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