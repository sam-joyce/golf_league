import express from "express";
import mysqlPool from "../dbUtils.js";

const router = express.Router();



router.get("/users", async (req, res) => {
  // const users = await getUsers();
  const users = await mysqlPool.query("SELECT * FROM User;");
  
  console.log(users);
  res.send(users);
});