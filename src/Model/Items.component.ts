export class Items {
    constructor(
        public id: number = 0,
        public itemName: string = '',
        public itemPrice: number = 0,
        public itemImage: string|any = '',
        public description: string = '',
        public itemType: string = '',
        public userID: string = sessionStorage.getItem("id")
    ) { }
}
