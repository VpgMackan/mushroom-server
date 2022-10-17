"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./src/db");
require("better-logging")(console);
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const db = new db_1.DB();
console.log(db.generate_table({
    name: "users",
    columns: [
        { name: "name", type: "varchar(20)", notnull: true },
        { name: "age", type: "int(2)", notnull: true },
        { name: "email", type: "varchar(50)", notnull: true },
        { name: "password", type: "varchar(100)", notnull: true },
        { name: "id", type: "varchar(36)", notnull: true },
    ],
    primary_key: "id",
}));
app.get("/", (req, res) => {
    res.send("Pog Champ");
});
app.listen(port, () => {
    console.info(`Server is running at https://localhost:${port}`);
});
