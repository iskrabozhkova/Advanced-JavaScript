import { sequelize } from "./sequelize";


export function connect() {
  return sequelize.authenticate().then(() => {
    console.log('Connected to database');
   // return models;
  });
}