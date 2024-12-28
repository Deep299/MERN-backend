const express = require("express");
const {
  saveProductCategory,
  deleteProductCategory,
  deleteManyProductCategories,
  getAllProductCategories,
  getProductCategory,
} = require("../controllers/productCategoryContoller");
const router = express.Router();

router.post("/api/productCategory/add", saveProductCategory);
router.get("/api/productCategory/getAll", getAllProductCategories);
router.get("/api/productCategory/get/:id", getProductCategory);
router.delete("/api/productCategory/delete/:id", deleteProductCategory);
router.delete("/api/productCategory/deleteMany", deleteManyProductCategories);

module.exports = router;
