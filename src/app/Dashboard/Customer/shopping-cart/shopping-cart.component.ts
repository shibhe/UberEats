import { Component, OnInit } from '@angular/core';
import { OnlineCart } from '../../../../Model/OnlineCart.component';
import { ShoppingCart } from '../../../../Model/cart-items';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products: Observable<OnlineCart[]>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;

  private cartSubscription: Subscription;

  public constructor(private productsService: ProductsService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
     this.products = this.productsService.getAllProducts();
     this.cart = this.shoppingCartService.get();
      this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
