import { User } from './User';
import { Vehicle } from './Vehicle';

export interface Booking{
    id?:number;
    bookingStatus?:boolean;
    startDate?:Date;
    endDate?:Date;
    total?:number;
    user?:User;
    vehicle?:Vehicle;
}