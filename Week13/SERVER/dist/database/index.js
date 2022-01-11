"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('test-db', 'root', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: console.info
});
function connect() {
    return exports.sequelize.authenticate().then(() => {
        console.log('Connected to database');
    });
}
exports.connect = connect;
//# sourceMappingURL=index.js.map