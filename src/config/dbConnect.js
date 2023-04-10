import mysql from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PSWORD, DB_DATABASE } from "../../config.js";

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PSWORD,
  database: DB_DATABASE,
  port: 3306
});

export default pool;
