// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controllers/productController");

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

module.exports = router;
