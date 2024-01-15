const mongoose = require("mongoose");
const collection = require("../Config/Collection");
require("../Config/Db");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "product name is required"],
    },
    productImage: {
      type: String,
      required: [true, "product image is required"],
    },
    productBrand: {
      type: String,
      required: [true, "product brand is required"],
    },
    productPrice: {
      type: Number,
      required: [true, "product price is required"],
    },
    productDescription: {
      type: String,
      required: [true, "product description is required"],
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model(collection.product, productSchema);
module.exports = productModel;
