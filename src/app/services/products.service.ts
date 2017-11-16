import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { Items } from '../../Model/Items.component';
import { OnlineCart } from '../../Model/OnlineCart.component';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { CachcingServiceBase } from './catching.service';

@Injectable()
export class ProductsService extends CachcingServiceBase{

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private BASE_URL: String = 'http://localhost/ubereats';
  private products: Observable<OnlineCart[]>;
  

  constructor(private http: Http) {super();
 }

  addNewProduct(items: Items){
    return this.http.post(`${this.BASE_URL}/addItems.php`, items, { headers: this.headers })
    .map((data) => console.log(JSON.stringify(data)));
  }

  getAllProducts(): Observable<OnlineCart[]>{
    return this.cache<OnlineCart[]>(() => this.products,
     (val: Observable<OnlineCart[]>) => this.products = val,
    () => this.http
              .get(`${this.BASE_URL}/getItems.php`)
              .map((response) => JSON.parse(JSON.stringify(response || null ))));

              /**return this.http.get(`${this.BASE_URL}/getItems.php`)
              .map((res : Response) => JSON.parse(JSON.stringify(res || null )))
              .catch((error : any) => Observable.throw('Server error' + error));**/
                                        
  }

}
