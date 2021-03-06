import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
import { IPostCreationAttributes, IPostModelInstance } from '../../interfaces/models/post';

//@ts-ignore
export const post = sequelize.define<IPostModelInstance, IPostCreationAttributes>('post', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
});

post.sync({ alter: true });