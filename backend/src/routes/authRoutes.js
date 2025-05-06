import express from "express";

const router = express.Router();

import { getUsers } from "../database.js";

router.get("/users", async (req, res) => {
  // const users = await getUsers();
  res.send(hi);
});

router.get("/login", async (req, res) => {
  res.send("login");
});

export default router;