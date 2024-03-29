import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const { v4: uuidv4 } = require("uuid");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const generate_table = (data: any) => {
  const sql = `CREATE TABLE IF NOT EXISTS ${data.name} (
    ${data.columns
      .map(
        (column: any) =>
          `${column.name} ${column.type} ${column.notnull ? "NOT NULL" : ""}`
      )
      .join(",")},
      PRIMARY KEY (${data.primary_key})
    );`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table created");
  });
};

const create_user = async (data: any) => {
  const uuid = uuidv4();

  connection.query(
    `
    INSERT INTO users (name, age, email, password, id)
    VALUES ('${data.name}', '${data.age}', '${data.email}', '${data.password}', '${uuid}');
    `,
    (err, result) => {
      if (err) throw err;
    }
  );

  return {
    name: data.name,
    email: data.email,
    id: uuid,
  };
};

export { connection, generate_table, create_user };
