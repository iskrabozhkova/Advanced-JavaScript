"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("./database/connect");
// import { models } from "./database/models";
// import cors from "cors";
const app = (0, express_1.default)();
(0, connect_1.connect)().then(() => {
    // models.post.create({
    //   title: "Post1",
    //   userId:1,
    //   content:"Some content"
    // })
    // models.post.create({
    //   title: "Post2",
    //   userId:2,
    //   content:"Some content"
    // })
    // models.post.create({
    //   title: "Post3",
    //   userId:3,
    //   content:"Some content"
    // })
    app.listen(8080, () => {
        console.log("Server is listening on :8080");
    });
});
