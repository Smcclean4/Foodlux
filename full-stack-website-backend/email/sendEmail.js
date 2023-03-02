import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

router.post("/", (req, res) => {
  let messageOptions = {
    from: `Foodlux Team! 🍔 <${process.env.EMAIL_USER}>`,
    to: req.body.email,
    subject: "Your Foodlux Order!",
    text: "Your Order Will Be There Shortly Be On The Lookout!",
  };

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transporter.sendMail(messageOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
});

export default router;
