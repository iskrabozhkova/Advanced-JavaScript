"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('db2', 'root', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: console.log
});
