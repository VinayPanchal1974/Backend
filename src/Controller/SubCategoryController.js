const subCategoryModel = require("../Model/SubCategoryModel");


exports.addSubCategory = async (req, res) => {
  try {
    const body = req.body;
    const data = {
      subCategoryName: body.subCategoryName,
    };
    const dbRes = await subCategoryModel.create(data);
    if (dbRes) {
      res.json({
        status: "success",
        message: "sub category added successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "sub category not added",
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

exports.findAllSubCategory = async (req, res) => {
  try {
    const dbRes = await subCategoryModel.find();
    if (dbRes) {
      res.json({
        status: "success",
        message: "sub-categories found successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "sub-categories not exist",
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

exports.findSingleSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };
    const dbRes = await subCategoryModel.findOne(filter);
    if (dbRes) {
      res.json({
        status: "success",
        message: "sub-category found successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "sub-category not exist",
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

exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };
    const body = req.body;
    const data = {
      subCategoryName: body.subCategoryName,
    };
    const dbRes = await subCategoryModel.updateOne(filter, data);
    if (dbRes) {
      res.json({
        status: "success",
        message: "sub-category updated successfully",
        data: dbRes,
      });
    } else {
      res.json({
        status: "failed",
        message: "sub-category not updated",
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

exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      _id: id,
    };

    const dbRes = await subCategoryModel.deleteOne(filter);
    if (dbRes) {
      res.json({
        status: "success",
        message: "sub-category deleted successfully",
      });
    } else {
      res.json({
        status: "failed",
        message: "sub-category not deleted",
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
