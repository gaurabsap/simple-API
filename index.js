import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDb from "./model/Db.js";
import { routes } from "./routes/apiRoute.js";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.listen(process.env.PORT, () => {
  ConnectDb();
  console.log("server is running...");
});
