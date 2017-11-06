export class Customer {
    constructor(
        public id: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public phoneNumber: string = '',
        public email: string = '',
        public password: string = '',
        public creditCard: string = '',
        public CVV: string = '',
        public expiryDate: string = '',
        public zipCode: string = '',
        public userRole: string = '',
        public rememberMe: boolean = false,
        public isLogged: boolean = true
    ) { }
}
