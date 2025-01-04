// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
} = require("../controllers/productController");

/**
 * @swagger
 * /api/product/get:
 *   get:
 *     summary: Retrieve a list of products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The product ID
 *                     example: 12345
 *                   name:
 *                     type: string
 *                     description: The product name
 *                     example: "Product Name"
 */
router.get("/api/product/get", getAllProducts);

/**
 * @swagger
 * /api/product/add:
 *   post:
 *     summary: Add a new product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               desc:
 *                 type: string
 *               category:
 *                 type: string
 *               subCategory:
 *                 type: string
 *               discount:
 *                 type: string
 *               vendor:
 *                 type: string
 *               Country:
 *                 type: string
 *               Region:
 *                 type: string
 *               taxable:
 *                 type: boolean
 *               brand:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product added successfully
 *       500:
 *         description: Error adding product
 */
router.post("/api/product/add", addProduct);

module.exports = router;
