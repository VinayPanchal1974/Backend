const express = require("express");
const multer = require("multer")
const { addCategory, findAllCategory, findSingleCategory, updateCategory, deleteCategory } = require("../Controller/CategoryController");
const categoryRouter = express.Router()

categoryRouter.post("/addCategory",multer().none(),addCategory)
categoryRouter.get("/getCategory",multer().none(),findAllCategory)
categoryRouter.get("/getSingleCategory/:id",multer().none(),findSingleCategory)
categoryRouter.put("/updateCategory/:id",multer().none(),updateCategory)
categoryRouter.delete("/deleteCategory/:id",multer().none(),deleteCategory)

module.exports = categoryRouter;