"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const connection = mysql2_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
class DB {
    generate_table(data) {
        const sql = `CREATE TABLE IF NOT EXISTS ${data.name} (
      ${data.columns
            .map((column) => `${column.name} ${column.type} ${column.notnull ? "NOT NULL" : ""}`)
            .join(",")},
        PRIMARY KEY (${data.primary_key})
      );`;
        return sql;
    }
}
exports.DB = DB;
exports.default = connection;
