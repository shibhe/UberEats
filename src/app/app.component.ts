import { Component } from '@angular/core';
import { RegisterCustomerService } from './services/Customer/register-customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RegisterCustomerService]
})
export class AppComponent {
}
