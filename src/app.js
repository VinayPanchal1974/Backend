const express = require("express");
const app = express();
const cors = require('cors');
const categoryRouter = require("./Routes/CategoryRoutes");
const subCategoryRouter = require("./Routes/SubCategoryRoutes");
const productRouter = require("./Routes/ProductRoutes");
const authRouter = require("./Routes/AdminAuthRoutes/AuthRoutes");
const userAuthRouter = require("./Routes/UserAuthRoutes/UserAuthRouter");

// Middleware
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// AdminAuth
app.use("/adminAuth",authRouter)

// UserAuth
app.use("/userAuth",userAuthRouter)

// Category
app.use("/category",categoryRouter)

// Sub-Category
app.use("/subCategory",subCategoryRouter)

// Product
app.use("/product",productRouter)





module.exports = app;
