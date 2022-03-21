"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const models_1 = require("./database/models");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello from backend');
});
(0, database_1.connect)().then(() => {
    models_1.models.user.create({
        email: 'test@abv.bg',
        name: 'Ivan',
        password: '1234'
    }).then(user => {
        user.email = 'best@abv.bg';
    });
    // models.user.findByPk(1).then(user => {
    //     user?.destroy();
    // })
    app.listen(8080, () => {
        console.log('Server is listening on :8080');
    });
});
//# sourceMappingURL=index.js.map