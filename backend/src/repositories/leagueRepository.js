import mysqlPool from "../dbUtils.js";

const findAll = async () => {
  const leagues = await mysqlPool.query(`SELECT * FROM League;`);
  console.log(leagues);
  return leagues
};


export {findAll};