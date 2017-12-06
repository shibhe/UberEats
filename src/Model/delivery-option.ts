export class DeliveryOption {
    constructor(
        public Id: string,
        public ProductID: number,
        public address: string,
        public price: number,
        public name: number,
        public Quality: number,
        public TotAmt: number,
        public status: number
    ){}
}