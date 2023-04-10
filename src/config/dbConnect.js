import mysql from 'mysql2/promise'

const {
  DB_HOST,
  DB_USER,
  DB_PSWORD,
  DB_DATABASE
} = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PSWORD,
  database: DB_DATABASE,
})

export default pool;