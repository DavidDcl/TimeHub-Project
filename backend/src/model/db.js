import mysql from "mysql2/promise"
import "dotenv/config"

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

pool.getConnection().catch(() => {
  console.warn("Failed to get a DB connection.")
})

export default pool
