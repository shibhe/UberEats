import { Injectable } from '@angular/core';
import { ShoppingCart } from '../../Model/cart-items';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';
import { OnlineCart } from '../../Model/OnlineCart.component';
import { StorageService } from './Storage.service';
import { ProductsService } from './products.service';

const CART_KEY = "cart";

@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private products: OnlineCart[];


  constructor(
    private storageService: StorageService,
    private productService: ProductsService
  ) { 
    this.storage = this.storageService.get();
    this.productService.getAllProducts().subscribe((products) => this.products = products);

    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public addItem(product: OnlineCart, quantity: number): void {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.id === product.id);
    if (item === undefined) {
      item = new OnlineCart();
      item.id = product.id;
      cart.items.push(item);
    }

    item.quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);
    if (cart.items.length === 0) {
      cart.deliveryOptionId = undefined;
    }

    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem(CART_KEY);
    return cart;
  }

  private save(cart: ShoppingCart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
            // we want all subscribers to get the update even if one errors.
          }
        });
  }

  private calculateCart(cart: ShoppingCart): void {
    cart.itemsTotal = cart.items
                          .map((item) => item.quantity * this.products.find((p) => p.id === item.id).itemPrice)
                          .reduce((previous, current) => previous + current, 0);
    cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
  }
}
