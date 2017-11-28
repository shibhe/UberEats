export class Items {
    constructor(
        public Id: number = 0,
        public itemName: string = '',
        public itemPrice: number = 0,
        public itemImage: string = '',
        public description: string = '',
        public itemType: string = '',
        public userID: string = sessionStorage.getItem("id"),
    ) { }
}
