const express = require("express");
const {
  saveProductCategory,
  deleteProductCategory,
  deleteManyProductCategories,
  getAllProductCategories,
  getProductCategory,
  updateProductCategory,
} = require("../controllers/productCategoryController");
const basicAuth = require("../config/basicAuth");
const authMiddleware = require("../config/authMiddleware");
const router = express.Router();

/**
 * @swagger
 * /api/productCategory/add:
 *   post:
 *     summary: Add a new product category
 *     tags: [ProductCategory]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product category added successfully
 *       400:
 *         description: Category name must be unique
 *       500:
 *         description: Error saving product category
 */
router.post("/api/productCategory/add", authMiddleware, saveProductCategory);

/**
 * @swagger
 * /api/productCategory/getAll:
 *   get:
 *     summary: Get all product categories
 *     tags: [ProductCategory]
 *     security:
 *       - basicAuth: []
 *     responses:
 *       200:
 *         description: List of product categories
 *       404:
 *         description: No product categories found
 *       500:
 *         description: Error getting product categories
 */
router.get(
  "/api/productCategory/getAll",
  authMiddleware,
  getAllProductCategories
);

/**
 * @swagger
 * /api/productCategory/get/{id}:
 *   get:
 *     summary: Get a product category by ID
 *     tags: [ProductCategory]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product category ID
 *     responses:
 *       200:
 *         description: Product category data
 *       404:
 *         description: Product category not found
 *       500:
 *         description: Error getting product category
 */
router.get("/api/productCategory/get/:id", authMiddleware, getProductCategory);

/**
 * @swagger
 * /api/productCategory/delete/{id}:
 *   delete:
 *     summary: Delete a product category by ID
 *     tags: [ProductCategory]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product category ID
 *     responses:
 *       200:
 *         description: Product category deleted successfully
 *       404:
 *         description: Product category not found
 *       500:
 *         description: Error deleting product category
 */
router.delete(
  "/api/productCategory/delete/:id",
  authMiddleware,
  deleteProductCategory
);

/**
 * @swagger
 * /api/productCategory/deleteMany:
 *   delete:
 *     summary: Delete multiple product categories
 *     tags: [ProductCategory]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Product categories deleted successfully
 *       404:
 *         description: No product categories found to delete
 *       500:
 *         description: Error deleting product categories
 */
router.delete(
  "/api/productCategory/deleteMany",
  authMiddleware,
  deleteManyProductCategories
);

/**
 * @swagger
 * /api/productCategory/update/{id}:
 *   put:
 *     summary: Update a product category by ID
 *     tags: [ProductCategory]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product category updated successfully
 *       400:
 *         description: Category name must be unique
 *       404:
 *         description: Product category not found
 *       500:
 *         description: Error updating product category
 */
router.put(
  "/api/productCategory/update/:id",
  authMiddleware,
  updateProductCategory
);

module.exports = router;
