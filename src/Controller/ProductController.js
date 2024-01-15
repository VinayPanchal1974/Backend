const productModel = require("../Model/ProductModel");

exports.addProduct = async (req, res) => {
  try {
    const body = req.body;
    const img = req.imagePath;
    const data = {
      productName: body.productName,
      productImage: img,
      productBrand: body.productBrand,
      productPrice: body.productPrice,
      productDescription: body.productDescription,
    };
    const dbRes = await productModel.create(data);
    if (dbRes) {
      res.json({
        status: "success",
        message: "product added successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "product not added",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "somthing went wrong",
      error: err,
    });
  }
};

exports.findAllProduct = async (req, res) => {
  try {
    const dbRes = await productModel.find();
    if (dbRes) {
      res.json({
        status: "success",
        message: "product found successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "product not exist",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "somthing went wrong",
      error: err,
    });
  }
};

exports.findSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };
    const dbRes = await productModel.findOne(filter);
    if (dbRes) {
      res.json({
        status: "success",
        message: "product found successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "product not exist",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "somthing went wrong",
      error: err,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };
    const body = req.body;
    const img = req.imagePath;
    const data = {
      productName: body.productName,
      productImage: img,
      productBrand: body.productBrand,
      productPrice: body.productPrice,
      productDescription: body.productDescription,
    };
    const dbRes = await productModel.updateOne(filter, data);
    if (dbRes) {
      res.json({
        status: "success",
        message: "product updated successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "product not updated",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "somthing went wrong",
      error: err,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };

    const dbRes = await productModel.deleteOne(filter);
    if (dbRes) {
      res.json({
        status: "success",
        message: "product deleted successfully",
      });
    } else {
      res.json({
        status: "failed",
        message: "product not deleted",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "somthing went wrong",
      error: err,
    });
  }
};
