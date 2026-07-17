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

   const { name, phone, message } = req.body;

   console.log(req.body);

   try {

      // SAVE DATA IN MONGODB

      await Contact.create({
         name,
         phone,
         message
      });

      // EMAIL SETUP

      const transporter = nodemailer.createTransport({

         service: "gmail",

         auth: {
            user: "salikantisrivani2@gmail.com",
            pass: "deaijiwvncvacbgt"
         }

      });

      // EMAIL CONTENT

      const mailOptions = {

         from: "salikantisrivani2@gmail.com",

         to: "salikantisrivani2@gmail.com",

         subject: "New Contact Message",

         text: `
Name: ${name}
Phone: ${phone}
Message: ${message}
         `
      };

      // SEND EMAIL

      await transporter.sendMail(mailOptions);

      res.json({
         success: true,
         message: "Email sent successfully & data saved"
      });

   } catch(error){

      console.log(error);

      res.status(500).json({
         success:false,
         message:"Failed to send email"
      });

   }

});


// FETCH ALL CONTACT MESSAGES

router.get("/all", async (req, res) => {

   try {

      const messages = await Contact.find();

      res.json(messages);

   } catch (error) {

      console.log(error);

      res.status(500).json({
         message: "Failed to fetch data"
      });

   }

});


export default router;