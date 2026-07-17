import express from "express";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/", async (req, res) => {

   try {

      const { email, password } = req.body;

      const admin = await Admin.findOne({
         email: email,
         password: password
      });

      if (admin) {

         res.json({
            success: true,
            message: "Login Successful"
         });

      } else {

         res.json({
            success: false,
            message: "Invalid Email or Password"
         });

      }

   } catch (error) {

      console.log(error);

      res.status(500).json({
         success: false,
         message: "Server Error"
      });

   }

});

export default router;