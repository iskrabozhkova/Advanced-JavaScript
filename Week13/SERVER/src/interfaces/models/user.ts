import {Optional, Model, ModelDefined} from 'sequelize/types';
import { BaseKeys, IBase } from "./base";

export interface IUserAttributes extends IBase{
    email: string;
    password: string;
    name: string;
    info: string | null;
}


export interface IUserCreationAttributes extends Optional<
IUserAttributes,
BaseKeys | 'info'>{
}

export interface IUserInstanceMethods {
    authenticate: (password: string) => Promise<boolean>;
}

export interface IUserModelInstance extends Model<IUserAttributes, IUserCreationAttributes>, IUserAttributes, IUserInstanceMethods{

}

// export class User extends Model<IUserAttributes, IUserCreationAttributes> implements IUserAttributes, IUserInstanceMethods{
//     declare id: number;
//     declare name: string;
//     declare password: string;
//     declare email: string;
//     declare info: string | null;

//     declare readonly createdAt: Date;
//     declare readonly updatedAt: Date;

//     declare authenticate: (password: string) => Promise<boolean>;

// }

