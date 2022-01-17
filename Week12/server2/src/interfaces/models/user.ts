import {BaseKeys, IBase} from './base'
import { HasManyGetAssociationsMixin, HasManySetAssociationsMixin, HasManyAddAssociationMixin, Model, Optional } from 'sequelize/types';
import { IPostModelInstance } from './post';

export interface IUserAttributes extends IBase{
    email: string;
    password: string;
    firstName: string;
    secondName: string;
    username: string;
    posts: IPostModelInstance[]
}
export interface IUserInstanceMethods {
    comparePasswords: (password: string) => Promise<boolean>;
  }

export interface IUserCreationAttributes extends Optional<IUserAttributes, BaseKeys>{}

export interface IUserModelInstance extends Model<IUserAttributes, IUserCreationAttributes>, IUserAttributes, IUserInstanceMethods {
    getPosts: HasManyGetAssociationsMixin<IPostModelInstance>;
    setPosts: HasManySetAssociationsMixin<IPostModelInstance, number>;
    addPost: HasManyAddAssociationMixin<IPostModelInstance, number>;
  }