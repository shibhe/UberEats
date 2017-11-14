export class OnlineCart {
    constructor(
        public id: number = 0,
        public shopName: string = '',
        public itemName: string = '',
        public itemPrice: number = 0,
        public itemImage: string = '',
        public description: string = '',
        public userID: string = '',
        // public location: string = ''
    ) { }
}
