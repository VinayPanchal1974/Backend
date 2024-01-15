const mongoose = require("mongoose");
const collection = require("../Config/Collection");
require("../Config/Db")

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "category name is required"],
    }
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model(collection.category, categorySchema);
module.exports = categoryModel;
