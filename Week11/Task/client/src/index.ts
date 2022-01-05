import { UserRole } from "./enums/user-role";
import { User } from "./interfaces/user";
import {environment} from "./environments/environment"

console.log(environment.API_URL);

function myFunc(str: string, count: number): string{
    let result='';
    for(let i = 0; i < count; i++){
        result+=str;
    }
    return result;
}

function userFactory(name: string, age: number) : User{
    return {
        name,
        age,
        role: UserRole.USER
    }
}

const result = myFunc('321', 5);
console.log(result);