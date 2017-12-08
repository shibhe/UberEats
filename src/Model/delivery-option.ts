export class DeliveryOption {
    constructor(
        public Id: string = '',
        public ProductID: number = 0,
        public address: string = '',
        public Quality: number = 0,
        public itemName: string = '',
        public itemPrice: number = 0,
        public TotAmt: number = 0,
        public status: boolean = false
    ){}
}