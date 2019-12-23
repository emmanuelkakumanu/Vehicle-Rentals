export interface Payment{
    id:number;
    cardNumber:number;
    cvvNumber:number;
    expiryDate:Date;
    bank:string;
    holderName:string;
    accountBalance:number;
}