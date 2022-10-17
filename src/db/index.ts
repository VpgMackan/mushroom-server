import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export class DB {
  public generate_table(data: any) {
    const sql = `CREATE TABLE IF NOT EXISTS ${data.name} (
      ${data.columns
        .map(
          (column: any) =>
            `${column.name} ${column.type} ${column.notnull ? "NOT NULL" : ""}`
        )
        .join(",")},
        PRIMARY KEY (${data.primary_key})
      );`;

    return sql;
  }
}

export default connection;
