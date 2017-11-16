import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { OnlineCart } from '../../../../Model/OnlineCart.component';
import { Items } from '../../../../Model/Items.component';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { ProductsService } from '../../../services/products.service';
import { ShoppingCart } from '../../../../Model/cart-items';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

interface ICartItemWithProduct extends OnlineCart {
  product: Items;
  totalCost: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  private products: OnlineCart[];
  private cartSubscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
   /**this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
    this.productsService.getAllProducts().subscribe((products) => {
    this.products = products;
    this.cartItems = cart.items
                   .map((item) => {
                         const product = this.products.find((p) => p.id === item.id);
                              return {
                                item,
                                product,
                                totalCost: product.itemPrice * item.quantity };
                           });
      });
    });**/
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
