import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from '../../services/Customer/register-customer.service';
import { Customer } from '../../../Model/Customer.component';
import { DashboardService } from '../../services/dashboard-service';
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

  constructor(private authenticationService: RegisterCustomerService,
     private DashboardService: DashboardService,
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
    this.authenticationService.login(this.customer.email, this.customer.password)
        .subscribe(
            data => {
                this.customer.isLogged = true;
                this.alertService.success('Login successful', true);
                this.router.navigate(['/login.html/username?role?1']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
                console.log(JSON.stringify(error));
            });
  }
}
