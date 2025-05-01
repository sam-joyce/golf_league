import mysql from "mysql2";

mysql.createPool({
  host: `127.0.0.1`,
  user: 'root',
  password: 'Monty1998!',
  database: 'golf_league_db'
}).promise()