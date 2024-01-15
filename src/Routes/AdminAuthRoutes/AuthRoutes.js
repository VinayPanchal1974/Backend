const express = require("express");
const multer= require("multer");
const { adminSignup, adminSignin } = require("../../Controller/AdminAuthController/AuthController");
const authRouter = express.Router();

authRouter.post("/signup",multer().none(),adminSignup)
authRouter.post("/signin",multer().none(),adminSignin)

module.exports = authRouter;
