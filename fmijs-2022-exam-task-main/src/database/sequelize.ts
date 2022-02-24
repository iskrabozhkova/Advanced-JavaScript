import { Sequelize } from 'sequelize';

// TODO: SETUP DATABASE
// NOTE: You can also use SQLite memory database.
// Use this for help: https://sequelize.org/v7/manual/dialect-specific-things.html
export const sequelize = new Sequelize(
  'fmi',
  'root',
  'password',
  {
    host: '127.0.0.1',
    dialect: 'mysql', // TODO: You can change this to the database that you are using
    port: 3306,
    logging: console.info
  }
);