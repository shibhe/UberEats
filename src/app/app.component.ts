import { Component, OnInit } from '@angular/core';
import { RegisterCustomerService } from './services/Customer/register-customer.service';
import { DashboardService } from './services/dashboard-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RegisterCustomerService, DashboardService]
})
export class AppComponent implements OnInit {

  isLoggedIn = true;
  constructor(private dashboardService: DashboardService){}

  ngOnInit(){
      this.isLoggedIn = this.dashboardService.hideDashboard;
  }

}
