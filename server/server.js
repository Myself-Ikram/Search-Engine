//Express
import express from "express";
const app = express();
app.use(express.json());
//Cors (for sharing the data)
import cors from "cors";
app.use(cors());
//Routes
import router from "./database/routes.js";
app.use("/api", router);
//Morgan (for logging request in console)
import morgan from "morgan";
app.use(morgan("tiny"));
//environment variables
import { config } from "dotenv";
config();
//MongoDB
import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/taskDB", { useNewUrlParser: true })
  .then(() => {
    console.log("DataBase Started");
    try {
      app.listen(5000, () => console.log("Server started running at 5000"));
    } catch (error) {
      console.log("Server cannot start");
    }
  })
  .catch((error) => {
    console.log("Database error");
  });
