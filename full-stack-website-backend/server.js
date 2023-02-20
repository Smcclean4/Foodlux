import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import registerUser from "./user/registerUser.js";
import userAuth from "./user/userAuth.js";
import * as dotenv from "dotenv";
dotenv.config();
const source = process.env.ATLAS_DB;
const port = process.env.PORT;
const app = express();

mongoose.set("strictQuery", false);

mongoose.connect(
  source,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to DB! :)");
    }
  },
);

app.use(express.json());
app.use(cors());
app.use("/registerUser", registerUser);
app.use("/userAuth", userAuth);

app.get("/", (req, res) => {
  res.send("Displaying the backend!! ;)");
});

app.get("*", (req, res) =>
  res
    .status(404)
    .json({ message: "Route does not exist", app: "Express-Routes" }),
);

app.listen(port || 5000, () => {
  console.log("Welcome to the backend!");
});
