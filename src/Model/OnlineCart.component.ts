export class OnlineCart {
    constructor(
        public Id: number = 0,
        public shopName: string = '',
        public itemName: string = '',
        public itemPrice: number = 0,
        // public itemImage: string = '',
        public description: string = '',
       // public quantity: number = 0,
        public userID: string = sessionStorage.getItem("id")
    ) { }
}
