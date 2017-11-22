import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-cart',
  templateUrl: './confirm-cart.component.html',
  styleUrls: ['./confirm-cart.component.css']
})
export class ConfirmCartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkout(){
    this.router.navigate(['/login/username/userRole=1/order/confirm-cart/checkout']);
  }
}
