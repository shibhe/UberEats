import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Customer } from '../../../Model/Customer.component';

@Injectable()
export class RegisterCustomerService {

  POST_CUSTOMER_URL = 'http://localhost/UberEats/addCustomer.php';

  constructor(private http: Http) { }

  postNewCustomer(customer: Customer) {
    return this.http.post(this.POST_CUSTOMER_URL, customer)
    .subscribe((req) => {
      console.log('Success ', req.json);
    }, (error) => {
      console.log('Error!', error);
    });
  }
  deleteCustomer(customer: Customer) {
    return this.http.delete(this.POST_CUSTOMER_URL + '/' + customer.id).subscribe((req) => {
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
    return this.http.get(this.POST_CUSTOMER_URL + '/' + customer._id)
    .toPromise()
    .then((data) => console.log(data.json))
    .catch((error) => console.log('error!', error));
  }
}
