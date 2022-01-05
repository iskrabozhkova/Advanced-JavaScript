import { UserRole } from "../enums/user-role";

export interface User{
    name:string,
    age: number,
    role: UserRole
}