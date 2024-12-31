const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productInventoryController");

const basicAuth = require("../config/basicAuth");
const router = express.Router();
/**
 * @swagger
 * /api/inventory/add:
 *   post:
 *     summary: Add a new product inventory
 *     tags: [ProductInventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: number
 *               categoryId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product inventory added successfully
 *       400:
 *         description: Error adding product inventory
 */
router.post("/api/inventory/add", createProduct);

/**
 * @swagger
 * /api/inventory:
 *   get:
 *     summary: Get all product inventories
 *     tags: [ProductInventory]
 *     responses:
 *       200:
 *         description: List of product inventories
 *       500:
 *         description: Error getting product inventories
 */
router.get("/api/inventory", getProducts);

/**
 * @swagger
 * /api/inventory/update/{id}:
 *   put:
 *     summary: Update a product inventory by ID
 *     tags: [ProductInventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product inventory ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: number
 *               categoryId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product inventory updated successfully
 *       400:
 *         description: Error updating product inventory
 *       404:
 *         description: Product inventory not found
 */
router.put("/api/inventory/update/:id", updateProduct);

/**
 * @swagger
 * /api/inventory/delete/{id}:
 *   delete:
 *     summary: Delete a product inventory by ID
 *     tags: [ProductInventory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product inventory ID
 *     responses:
 *       200:
 *         description: Product inventory deleted successfully
 *       404:
 *         description: Product inventory not found
 *       500:
 *         description: Error deleting product inventory
 */
router.delete("/api/inventory/delete/:id", deleteProduct);

module.exports = router;
