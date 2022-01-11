import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'test-db', 
    'root',
    'password',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306,
        logging: console.info
    }
)

export function connect(){
    return sequelize.authenticate().then(() => {
        console.log('Connected to database');
    })
}
