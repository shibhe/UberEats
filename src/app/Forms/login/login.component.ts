import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Customer } from '../../../Model/Customer.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/Alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer = new Customer();
  loading = false;
  returnUrl: string;
  results;

  constructor(private authenticationService: RegisterCustomerService,
     private route: ActivatedRoute,
     private router: Router,
     private alertService: AlertService) { }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // tslint:disable-next-line:one-line
  onSubmit(){
    this.loading = true;
    let email = this.customer.email;
    let password = this.customer.password;
    this.authenticationService.login(this.customer)
    this.alertService.success('Login successful', true);
    this.router.navigate(['/login/username/userRole=1']);
    this.authenticationService.setIsLoggedIn();
  }
}
