const jwt = require("jsonwebtoken");
const authModel = require("../../Model/AdminAuthModel/AuthModel");
const { expireTokenTime, comparePassword } = require("../../Utils/Utils");
require("dotenv").config();

exports.adminSignup = async (req, res) => {
  try {
    const body = req.body;
    const data = {
      name: body.name,
      email: body.email,
      password: body.password,
    };
    const dbRes = await authModel.create(data);
    if (dbRes) {
      res.json({
        status: "success",
        message: "user registred",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "user not registered",
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      message: "somthing went wrong",
      error: error,
    });
  }
};

exports.adminSignin = async (req, res) => {
  try {
    const body = req.body;
    const filter = {
      email: body.email,
    };
    const dbRes = await authModel.findOne(filter, {
      name: 1,
      email: 1,
      password: 1,
    });
    if (dbRes) {
      if (comparePassword(body.password, dbRes.password)) {
        const secretKey = process.env.JWT_SECRET_KEY;
        const bindKey = {
          time: Date(),
          name: dbRes.name,
          password: dbRes.password,
          email: dbRes.email,
        };
        const token = jwt.sign(bindKey, secretKey, expireTokenTime());
        res.json({
          status: "success",
          message: "user found",
          data: {
            name: dbRes.name,
            email: dbRes.email,
          },
          token: token,
        });
      } else {
        res.json({
          status: "failed",
          message: "incorrect password",
        });
      }
    } else {
      res.json({
        status: "failed",
        message: "user not found",
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      message: "somthing went wrong",
      error: error,
    });
  }
};
