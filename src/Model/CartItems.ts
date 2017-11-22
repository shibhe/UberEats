import { OnlineCart } from "./OnlineCart.component";

export class CartItems extends OnlineCart {
    constructor(
        public Id: number = 0,
        public shopName: string = '',
        public itemName: string = '',
        public itemPrice: number = 0,
        // public itemImage: string = '',
        public description: string = '',
        public quantity?: number,
        public itemsTotal?: number
    ) {super();}
}
