"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Post_1 = require("./routers/Post");
const PORT = 9000;
const app = (0, express_1.default)();
app.use("api", Post_1.PostRouter);
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
