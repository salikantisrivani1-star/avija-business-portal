import express from "express";
import nodemailer from "nodemailer";
import contact from "../models/contact.js";

const router = express.Router();


// TEST API

router.get("/", (req, res) => {
   res.send("Contact API working");
});


// SEND MESSAGE + SAVE DATA

router.post("/", async (req, res) => {

   const { name, phone, email, message } = req.body;

   console.log(req.body);

   try {

      // SAVE DATA IN MONGODB

      await contact.create({
         name,
         phone,
         email,
         message
      });

      // EMAIL SETUP

      const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

      // EMAIL CONTENT

      const mailOptions = {

         from: process.env.EMAIL_USER,

         to: process.env.EMAIL_USER,

         subject: "New Contact Message",

         text: `
Name: ${name}
Phone: ${phone}
Message: ${message}
         `
      };

      // SEND EMAIL
transporter.verify((error, success) => {
    if (error) {
        console.error("Transporter Error:", error);
    } else {
        console.log("Transporter is ready");
    }
});
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      res.json({
         success: true,
         message: "Email sent successfully & data saved"
      });

   } catch (error) {
   console.error("Nodemailer Error:", error);
   res.status(500).json({
      success: false,
      message: "Failed to send email"
   });
}

});


// FETCH ALL CONTACT MESSAGES

router.get("/all", async (req, res) => {

   try {

      const messages = await contact.find();

      res.json(messages);

   } catch (error) {

      console.log(error);

      res.status(500).json({
         message: "Failed to fetch data"
      });

   }

});


export default router;