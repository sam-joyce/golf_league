import mysql from "mysql2/promise";
import "dotenv/config";

const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});




export default mysqlPool;
// let sql = "SELECT * FROM User;";
// pool.execute(sql, (err, result) => {
//   if (err) throw err;
//   console.log(result);
// })

// // const result = await pool.query("SELECT * FROM User;");
// // console.log(result);

// export default pool.promise();
// // export async function getUsers() {
// //   const [users] = await pool.query("SELECT * FROM User;");
// //   return users;
// // }





