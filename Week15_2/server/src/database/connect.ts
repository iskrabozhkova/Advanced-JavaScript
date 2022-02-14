import {sequelize} from "./sequelize"

export function connection(){
    return sequelize.authenticate().then(() => {
        console.log('Connected to server');
    })
}