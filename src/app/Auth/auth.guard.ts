import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RegisterCustomerService } from '../services/Customer/register-customer.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private registerCustomerService: RegisterCustomerService, private router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.router.navigate(['/home.html']);
    return this.registerCustomerService.getIsLoggedIn();
  }
}
