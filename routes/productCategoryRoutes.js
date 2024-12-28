const express = require("express");
const {
  saveProductCategory,
  deleteProductCategory,
  deleteManyProductCategories,
  getAllProductCategories,
  getProductCategory,
  updateProductCategory,
} = require("../controllers/productCategoryContoller");
const basicAuth = require("../config/basicAuth");
const router = express.Router();

router.post("/api/productCategory/add", basicAuth, saveProductCategory);
router.get("/api/productCategory/getAll", basicAuth, getAllProductCategories);
router.get("/api/productCategory/get/:id", basicAuth, getProductCategory);
router.delete(
  "/api/productCategory/delete/:id",
  basicAuth,
  deleteProductCategory
);
router.delete(
  "/api/productCategory/deleteMany",
  basicAuth,
  deleteManyProductCategories
);
router.put("/api/productCategory/update/:id", basicAuth, updateProductCategory);

module.exports = router;
