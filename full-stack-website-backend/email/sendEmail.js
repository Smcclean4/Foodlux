import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

router.post("/", (req, res) => {
  let message =
    "<div style='text-align:center; width:75%; margin: 0 auto; background-color:#BB9CEF; color:white !important; padding:20px'>" +
    "<h1 style='font-family: Courier New'>" +
    `Hi, ${req.body.firstname} your Order Will Be There Shortly Be On The Lookout!` +
    "</h1>" +
    "<p style='font-size:50px; font-family: Courier New'>" +
    "<b>Foodlux!</b>" +
    "</p>" +
    "<img src='https://i.imgur.com/6h2Bamk.png' title='Foodlux Bus' style='height: 250px' />" +
    "<p style='font-size:25px; font-family: Courier New'>" +
    "Dear valued customer, <br> Thank you for choosing FoodLux! We appreciate your order and promise to prepare it with the freshest ingredients and utmost care. We aim to make your experience with us seamless and convenient. We look forward to serving you again soon! <br> -The FoodLux Team" +
    "</p>" +
    `<h5>Order is being deliverd to address ending in ${req.body.city}, ${req.body.state} ${req.body.zip} ${req.body.country}.</h5>` +
    "</div>";

  let messageOptions = {
    from: `Foodlux Team! 🍔 <${process.env.EMAIL_USER}>`,
    to: req.body.email,
    subject: "Your Foodlux Order!",
    html: message,
  };

  let transporter = nodemailer.createTransport({
    host: `${process.env.SMTP_HOST}`,
    port: `${process.env.SMTP_PORT}`,
    secure: true,
    auth: {
      user: `${process.env.EMAIL_USER}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
  });

  transporter.sendMail(messageOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
});

export default router;
