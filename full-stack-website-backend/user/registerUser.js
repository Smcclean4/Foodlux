import express from "express";
import bcrypt from "bcrypt";
import userRegisterModel from "./schema/registerSchema.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  let user = new userRegisterModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: securePassword,
    confirmpassword: securePassword,
  });

  user
    .save()
    .then((data) => {
      res.json(data);
      res.send({ token: "User Registered!" });
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
