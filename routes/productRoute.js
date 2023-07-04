const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

// router.post("/", authMiddleware, isAdmin, createProduct);  ORIGINAL
router.post("/", createProduct); //TEMPERORY

router.get("/:id", getaProduct);

router.put("/wishlist", authMiddleware, addToWishlist);

router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct); //ORIGINAL
// router.put("/:id", updateProduct); //TEMPERORY
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAllProduct);

module.exports = router;
