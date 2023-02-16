import express from "express";
import bcrypt from "bcrypt";
import registeredUser from "./schema/registerSchema.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await registeredUser.findOne({ username: req.body.username });

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

export default router;
