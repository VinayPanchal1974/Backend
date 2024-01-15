const mongoose = require("mongoose");
const collection = require("../Config/Collection");
require("../Config/Db")

const subCategorySchema = new mongoose.Schema(
  {
    subCategoryName: {
      type: String,
      required: [true, "subCategory name is required"],
    }
  },
  {
    timestamps: true,
  }
);

const subCategoryModel = mongoose.model(collection.subCategory, subCategorySchema);
module.exports = subCategoryModel;
