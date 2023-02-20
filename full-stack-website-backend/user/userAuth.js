import express from "express";
import bcrypt from "bcrypt";
import userRegisterModel from "./schema/registerSchema.js";
const router = express.Router();
const app = express();

router.post("/", async (req, res) => {
  try {
    const user = await userRegisterModel.findOne({
      username: req.body.username,
    });

    app.set("user", req.body.username);

    if (!user) {
      return res.status(401).send({ message: "username is incorrect..." });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );

    if (!validPassword) {
      return res.status(401).send({ message: "password is incorrect..." });
    }

    if (user && validPassword) {
      return res.send("logged in!!!");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/fetchUserName", (req, res) => {
  try {
    return res.send(app.get("user"));
  } catch (error) {
    console.log(error);
  }
});

export default router;
