export class Driver {
    constructor(
        public Id: number = 0,
        public firstName: string = '',
        public lastName: string = '',
        public phoneNumber: string = '',
        public email: string = '',
        public password: string = '',
        public city: string = '',
        public inviteCode: string = '',
        public transportType: string = '',
        public userRole: string = 'Driver'
    ) { }
}
