import { findAll } from "../repositories/leagueRepository.js";

const getAllLeagues = async () => {
  return await findAll();
}


export { getAllLeagues };