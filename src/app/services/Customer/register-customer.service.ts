import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Customer } from '../../../Model/Customer.component';

@Injectable()
export class RegisterCustomerService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost/UberEats';

  constructor(private http: Http) { }

  postNewCustomer(customer: Customer) {
    return this.http.post(`${this.BASE_URL}/addCustomer.php`, customer, { headers: this.headers })
    .map((data) => console.log(JSON.stringify(data))).toPromise();
  }
  /**deleteCustomer(customer: Customer) {
    // tslint:disable-next-line:whitespace
    return this.http.delete(this.POST_CUSTOMER_URL+'/'+customer.id).subscribe((req) => {
      console.log('Success ', req.json);
    }, (error) => {
      console.log('Error!', error);
    });
   }

  updateCustomer(customer: Customer) {
    return this.http.put(this.POST_CUSTOMER_URL, customer)
      .subscribe((req) => {
        console.log('Success ', req.json);
      }, (error) => {
        console.log('Error!', error);
      });
  }

  getAllCustomers() {
    return this.http.get(this.POST_CUSTOMER_URL).subscribe((data) => console.log(data));
  }

  getCustomer(customer: Customer) {
    return this.http.get(this.POST_CUSTOMER_URL + '/' + customer.id)
    .toPromise()
    .then((data) => console.log(data.json))
    .catch((error) => console.log('error!', error));
  }**/

  customerLogIn(customer: Customer): Promise<any> {
    return this.http.post(`${this.BASE_URL}/login.php`, customer, { headers: this.headers})
        .map((data) => console.log(JSON.stringify(data)))
        .toPromise();
    }
}
