const express = require("express");
const {
  saveProductCategory,
} = require("../controllers/productCategoryContoller");
const router = express.Router();

router.post("/api/productCategory/add", saveProductCategory);

module.exports = router;
