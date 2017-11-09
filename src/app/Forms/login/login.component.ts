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
    let email = this.customer.email;
    let password = this.customer.password;
    this.authenticationService.login(email, password)
    .subscribe((custData) =>
    {
      if (custData.success === "true"){
        sessionStorage.setItem("firstName", custData.firstName);
        sessionStorage.setItem("lastName", custData.lastName);
        sessionStorage.setItem("id", custData.id);
        sessionStorage.setItem("email", custData.email);
        alert(custData.message + " " + custData.firstName);
        this.alertService.success('Login successful', true);
        this.router.navigate(['/login/username/userRole=1']);
        sessionStorage.setItem("success", custData.success);
        this.authenticationService.setIsLoggedIn();
      }
      else if (custData.status == 0){
        alert("Please check your internet connection or maybe the server is donw");
        this.loading = false;
      }
    });
  }
}
