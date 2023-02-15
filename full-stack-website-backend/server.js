import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const source = process.env.ATLAS_DB;
const port = process.env.PORT;
const app = express();

mongoose.set("strictQuery", false);

mongoose.connect(source, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to DB! :)");
  }
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Displaying the backend!! ;)");
});

app.listen(port || 5000, () => {
  console.log("Welcome to the backend!");
});
