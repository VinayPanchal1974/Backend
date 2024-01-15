const mongoose = require("mongoose");
const { passwordEncoded } = require("../../Utils/Utils");
const collection = require("../../Config/Collection");
require("../../Config/Db");

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      unique:true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  {
    timestamps: true,
  }
);

authSchema.pre("save",function(){
    this.password = passwordEncoded(this.password)
})

const userAuthModel = mongoose.model(collection.userAuth, authSchema);
module.exports = userAuthModel;
