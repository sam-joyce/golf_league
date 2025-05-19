import mysqlPool from "../dbUtils.js";
import { getAllLeagues } from "../services/leagueService.js";


const getLeagues = async (req, res) => {
  try {
    const leagues = await getAllLeagues();
    res.status(200).json(leagues);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching leaderboard' });
  }
};


export {getLeagues};