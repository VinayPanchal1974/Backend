const express = require("express");
const multer = require("multer");
const upload = require("../Middleware/ProductUploadMiddleware")
const { addProduct, findAllProduct, findSingleProduct, updateProduct, deleteProduct } = require("../Controller/ProductController");
const productRouter = express.Router()

productRouter.post("/addProduct",upload.single("productImage"),addProduct)
productRouter.get("/getProduct",multer().none(),findAllProduct)
productRouter.get("/getSingleProduct/:id",multer().none(),findSingleProduct)
productRouter.put("/updateProduct/:id",upload.single("productImage"),updateProduct)
productRouter.delete("/deleteProduct/:id",multer().none(),deleteProduct)

module.exports = productRouter;