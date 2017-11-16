export class Restaurant {
    constructor(
        public id: number = 0,
        public firstName: string = '',
        public lastName: string = '',
        public phoneNumber: string = '',
        public email: string = '',
        public password: string = '',
        public city: string = '',
        public title: string = '',
        public RestName: string = '',
        public numOfLocation: number = 0,
        public typeOfCuisine: string = '',
        public estweeklyOrder: string = '',
        public offerDelivery: boolean  = false,
        public zipCode: string = '',
        public userRole: string = 'Restaurant'
    ) { }
}