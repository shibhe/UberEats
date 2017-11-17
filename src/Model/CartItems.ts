import { OnlineCart } from "./OnlineCart.component";

export class CartItems extends OnlineCart {
    constructor(
        public items: OnlineCart[] = new Array<OnlineCart>(),
        public deliveryOptionId: string,
        public grossTotal: number = 0,
        public deliveryTotal: number = 0,
        public itemsTotal: number = 0
    ) {super();
 }
}
