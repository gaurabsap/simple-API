import express from "express";
import { createJson, getJsonData } from "../controller/Usercontroller.js";

export const routes = express.Router();

routes.post("/api/create/:user", createJson);
routes.get("/api/data", getJsonData);
routes.get("/", async (resq, resp) => {
  return resp.send(
    "Welcome to api 😃 <br><br> Routes : <br> createApi: /api/v1/create/{username} <br> getApidata: /api/data?user={username}"
  );
});
// routes.use("*", async (resq, resp) => {
//   resp.status(404).json({
//     message: "Routes not found",
//   });
// });
