"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_1 = require("./sequelize");
function connect() {
    return sequelize_1.sequelize.authenticate().then(() => {
        console.log('Connected to database');
        // return models;
    });
}
exports.connect = connect;
