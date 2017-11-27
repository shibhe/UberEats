export class Order {
    constructor(
        public Id: number = 0,
        public CustID: string = sessionStorage.getItem("id"),
        public Quality: number = 0,
        public TotAmt: number = 0,
        public address: string = '',
        public ProductID: number = 0,
        public RestID: number = 1,
        public status: boolean = false
        
    ) { }
}
