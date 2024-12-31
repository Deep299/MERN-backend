const express = require("express");
const { saveUser, signInUser } = require("../controllers/userController");
const router = express.Router();

/**
 * @swagger
 * /api/user/create:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Error creating user
 */
router.post("/api/user/create", saveUser);

/**
 * @swagger
 * /api/user/signin:
 *   post:
 *     summary: Sign in a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sign-in successful
 *       400:
 *         description: Invalid email or password
 *       500:
 *         description: Error signing in user
 */
router.post("/api/user/signin", signInUser);

module.exports = router;
