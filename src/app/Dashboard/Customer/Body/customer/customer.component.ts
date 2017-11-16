import { Component, OnInit } from '@angular/core';
import { OnlineCart } from '../../../../../Model/OnlineCart.component';
import { RegisterCustomerService } from '../../../../services/Customer/register-customer.service';
import { ActivatedRoute } from '@angular/router';
import { Items } from '../../../../../Model/Items.component';
import { ShoppingCartService } from '../../../../services/shopping-cart.service';
import { ProductsService } from '../../../../services/products.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public products: Observable<OnlineCart[]>;

  constructor(private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService,
     private registerCustomerService:RegisterCustomerService,
     private route: ActivatedRoute) { }

  
     public addProductToCart(product: OnlineCart): void {
      this.shoppingCartService.addItem(product, 1);
    }
  
    public removeProductFromCart(product: OnlineCart): void {
      this.shoppingCartService.addItem(product, -1);
    }
  
    public productInCart(product: OnlineCart): boolean {
      return Observable.create((obs: Observer<boolean>) => {
        const sub = this.shoppingCartService
                        .get()
                        .subscribe((cart) => {
                          obs.next(cart.items.some((i) => i.id === product.id));
                          obs.complete();
                        });
        sub.unsubscribe();
      });
    }
  
    public ngOnInit(): void {
      this.products = this.productsService.getAllProducts();
    }

}
