import express from "express";
import bcrypt from "bcrypt";
import registeredUser from "./schema/registerSchema.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const user = new registeredUser({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: securePassword,
    confirmpassword: password,
  });

  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
