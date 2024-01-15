const express = require("express");
const multer = require("multer");
const { addSubCategory, findAllSubCategory, findSingleSubCategory, updateSubCategory, deleteSubCategory } = require("../Controller/SubCategoryController");
const subCategoryRouter = express.Router()

subCategoryRouter.post("/addSubCategory",multer().none(),addSubCategory)
subCategoryRouter.get("/getSubCategory",multer().none(),findAllSubCategory)
subCategoryRouter.get("/getSingleSubCategory/:id",multer().none(),findSingleSubCategory)
subCategoryRouter.put("/updateSubCategory/:id",multer().none(),updateSubCategory)
subCategoryRouter.delete("/deleteSubCategory/:id",multer().none(),deleteSubCategory)

module.exports = subCategoryRouter;