import {IBase, BaseKeys} from './base'
import {HasManyGetAssociationsMixin, HasManySetAssociationsMixin, HasManyAddAssociationMixin} from 'sequelize/types'
import {Optional, Model} from 'sequelize'
import { IPostModelInstance } from './post';

export interface IUserAttributes extends IBase{
    email: string;
    password: string;
    username:string;
    firstName: string;
    lastName: string;
}

export interface IUserCreationAttributes extends Optional<
IUserAttributes, BaseKeys>{}

export interface IUserInstanceMethods{}

export interface IUserModelInstance extends Model<IUserAttributes, IUserCreationAttributes>, IUserAttributes, IUserInstanceMethods {
    getPosts: HasManyGetAssociationsMixin<IPostModelInstance>;
    setPosts: HasManySetAssociationsMixin<IPostModelInstance, number>;
    addPost: HasManyAddAssociationMixin<IPostModelInstance, number>;
}