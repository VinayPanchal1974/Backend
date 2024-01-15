const categoryModel = require("../Model/CategoryModel");

exports.addCategory = async (req, res) => {
  try {
    const body = req.body;
    const data = {
      categoryName: body.categoryName,
    };
    const dbRes = await categoryModel.create(data);
    if (dbRes) {
      res.json({
        status: "success",
        message: "category added successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "category not added",
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

exports.findAllCategory = async (req, res) => {
  try {
    const dbRes = await categoryModel.find();
    if (dbRes) {
      res.json({
        status: "success",
        message: "categories found successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "categories not found",
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

exports.findSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };
    const dbRes = await categoryModel.findOne(filter);
    if (dbRes) {
      res.json({
        status: "success",
        message: "category found successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "category not found",
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

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };
    const body = req.body;
    const data = {
      categoryName: body.categoryName,
    };
    const dbRes = await categoryModel.updateOne(filter, data);
    if (dbRes) {
      res.json({
        status: "success",
        message: "category updated successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "category not updated",
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

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };

    const dbRes = await categoryModel.deleteOne(filter);
    if (dbRes) {
      res.json({
        status: "success",
        message: "category deleted successfully",
      });
    } else {
      res.json({
        status: "failed",
        message: "category not deleted",
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
