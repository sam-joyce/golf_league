import express from "express";
import { getLeagues } from "../controllers/leagueController.js";
import mysqlPool from "../dbUtils.js";

const router = express.Router();

// import { getUsers } from "../database.js";


router.get("/users", async (req, res) => {
  // const users = await getUsers();
  const users = await mysqlPool.query("SELECT * FROM User;");
  
  console.log(users);
  res.send(users);
});

// GET /leagues                 // list all leagues
// POST /leagues               // create a league
// GET /leagues/:id            // league details
// GET /leagues/:id/members    // list users in league
router.get('/league', getLeagues);



export default router;