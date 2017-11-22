import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public creditCard;
  public CVV;
  public expiryDate;
  public Address;

  constructor(private router: Router) { }

  ngOnInit() {
    this.creditCard = sessionStorage.getItem("creditCard")
    this.CVV = sessionStorage.getItem("CVV")
    this.expiryDate = sessionStorage.getItem("expiryDate")
  }

  confirmCheckout(){
    this.router.navigate(['/login/username/userRole=1/order/check-out/payment/confirm-cart']);
  }
}
