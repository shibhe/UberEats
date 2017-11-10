export class Customer {
    constructor(
        public id: number = 0,
        public firstName: string = '',
        public lastName: string = '',
        public phoneNumber: string = '',
        public email: string = '',
        public password: string = '',
        public creditCard: string = '',
        public CVV: string = '',
        public expiryDate: string = '',
        public zipCode: string = '',
        public userRole: string = 'Customer',
        public message: string = '',
        public isLogged: boolean = false
    ) { }
}
