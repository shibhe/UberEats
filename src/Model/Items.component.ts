export class Items {
    constructor(
        public id: number = 0,
        public itemName: string = '',
        public itemPrice: number = 0,
        public itemImage: Blob,
        public description: string = '',
         public userID: string = sessionStorage.getItem("Id"),
    ) { }
}
