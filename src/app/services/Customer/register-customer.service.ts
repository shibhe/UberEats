import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Customer } from '../../../Model/Customer.component';

@Injectable()
export class RegisterCustomerService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'https://uncreditable-window.000webhostapp.com';

  constructor(private http: Http) { }

  postNewCustomer(customer: Customer) {
    return this.http.post(`${this.BASE_URL}/addCustomer.php`, customer, { headers: this.headers })
    .map((data) => console.log(JSON.stringify(data))).toPromise()
    .catch((error) => console.log(JSON.stringify(error)));
  }

  customerLogIn(customer: Customer): Promise<any> {
    return this.http.post(`${this.BASE_URL}/login.php`, customer, { headers: this.headers})
        .map((data) => console.log(JSON.stringify(data)))
        .toPromise()
        .catch((error) => console.log(JSON.stringify(error)));
    }
}
