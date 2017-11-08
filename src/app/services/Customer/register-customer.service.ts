import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Customer } from '../../../Model/Customer.component';
import { DashboardService } from '../dashboard-service';


@Injectable()
export class RegisterCustomerService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost/ubereats';
  private isLoggedIn;
 // public userData: Customer[] = [];

  constructor(private http: Http) {
    this.isLoggedIn = true;
   }

  postNewCustomer(customer: Customer) {
    return this.http.post(`${this.BASE_URL}/addCustomer.php`, customer, { headers: this.headers })
    .map((data) => console.log(JSON.stringify(data)));
  }

login(customer: Customer) {
    return this.http.post(`${this.BASE_URL}/login.php`, customer, { headers: this.headers })
      .toPromise()
      .then((data: Response) => {
         console.log(JSON.stringify(data))
    })
    .catch((error) => console.log(error));
   
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('customer');
  }

  setIsLoggedIn(){
    this.isLoggedIn = true;
  }
  
  getIsLoggedIn(){
    return this.isLoggedIn;
  }

}
