export class Order {
    constructor(
        public Id: number = 0,
        public CustID: string = sessionStorage.getItem("Id"),
        public quantity: number = 0,
        public totAmt: number = 0,
        public RestID: string = '',
        public address: string = '',
        public ProductID: number = 0
    ) { }
}
