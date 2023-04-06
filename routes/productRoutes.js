const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  checkBody,
  deleteProduct,
  // checkId,
} = require("../controllers/productController");

const router = express.Router();
// router.param("slug", checkSlug);
// Create a checkBody middleware
// Check the body contains name and price
// If not, Send back 400(bad request)
// Add it to the post handler stack
// router.param("id", checkId);
router.route("/").get(getAllProducts).post(checkBody, createProduct);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
