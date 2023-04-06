const Products = require("../model/productModel");

exports.checkId = async (req, res, next, val) => {
  const product = await Products.findById({ _id: req.params.val });
  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "productId not Exists",
    });
  }
  next();
};
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.salePrice) {
    return res.status(400).json({
      status: "error",
      message: "name and price are required",
    });
  }
  next();
};
exports.getAllProducts = async (req, res) => {
  try {
    const newProduct = await Products.find();
    res.status(200).json({
      status: "success",
      result: newProduct.length,
      data: {
        products: newProduct,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Products.create(req.body);
    res.status(201).json({
      status: "success",
      result: newProduct.length,
      data: {
        products: newProduct,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
exports.getProduct = async (req, res) => {
  const product = await Products.findOne({ _id: req.params.id });
  try {
    res.status(200).json({
      status: "success",
      result: product.length,
      data: {
        products: product,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      result: product.length,
      message: "Product Update Successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      result: product.length,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};
