import {Optional, Model} from 'sequelize/types';
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

