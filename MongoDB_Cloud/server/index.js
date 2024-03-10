import express from "express";
const app = express();
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_KEY;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("連結到MongoDB..");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(8080, () => {
  console.log("後端伺服器聆聽在port 8080");
});
