import { Role } from './Role';

export interface User {
    id:number;
    userName: string;
    password?: string;
    firstName: string;
    lastName: string;
    roleList?:Role[];
    age: number;
    gender: string;
    contactNo: number;
    emailId: string;
    branch: string;
    active?: boolean
    accessToken?: string;
}