const express = require("express");
const multer= require("multer");
const { userSignup, userSignin } = require("../../Controller/UserAuthController/UserAuthController");
const userAuthRouter = express.Router();

userAuthRouter.post("/signup",multer().none(),userSignup)
userAuthRouter.post("/signin",multer().none(),userSignin)

module.exports = userAuthRouter;
