 export default class UserDetails{
    public name: any;
    public country: any;
    public city: any;
    public creditCard: any;
    public month: any;
    public year: any;
    constructor() {
      this.name = process.env.UNAME;
      this.country = 'Estonia';
      this.city = 'Tallinn';
      this.creditCard = '1234567890';
      this.month = 'Jan';
      this.year = '2022';
    } 
 }