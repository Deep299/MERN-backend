const express = require("express");
const {
  saveProductCategory,
} = require("../controllers/productCategoryContoller");
const router = express.Router();

router.post("/api/productCategory/add", saveProductCategory);
// router.post("/api/productCategory/getAll", updateUser);

module.exports = router;
