import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';
import bcrypt from 'bcrypt';
import { IUserCreationAttributes, IUserModelInstance } from '../../interfaces/models/user';

export const user = sequelize.define<IUserModelInstance, IUserCreationAttributes>('user', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  info: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null
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
}, {
  hooks: {
    beforeSave(instance: IUserModelInstance) {
      if (instance.password === instance.previous('password')) {
        return Promise.resolve();
      }
      return bcrypt.genSalt(10)
        .then(salt => bcrypt.hash(instance.password, salt))
        .then(hashed => {
        instance.password = hashed;
      });
    }
  }
});

user.prototype.comparePasswords = function (this: IUserModelInstance, password: string) {
  return bcrypt.compare(password, this.password);
};

export function sync() {
  return user.sync({ alter: true });
}
