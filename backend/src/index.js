import express from "express";
import "dotenv/config";

import leagueRoutes from "./routes/leagueRoutes.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/", leagueRoutes);



app.listen(PORT, () => {
  console.log(`Server runnning on port ${PORT}`);
})