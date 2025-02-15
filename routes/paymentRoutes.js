// filepath: /d:/WineCeller/MERN-backend/routes/paymentRoutes.js
const express = require('express');
const { createPaymentIntent, handlePaymentConfirmation } = require('../controllers/paymentController');
const router = express.Router();


/**
 * @swagger
 * /api/payment/create-payment-intent:
 *   post:
 *     summary: Create a payment intent
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 1000
 *     responses:
 *       200:
 *         description: Payment intent created successfully
 *       500:
 *         description: Error creating payment intent
 */
router.post('/api/payment/create-payment-intent', createPaymentIntent);

/**
 * @swagger
 * /api/payment/Payment-confirmation:
 *   post:
 *     summary: Handle Stripe webhook events
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Webhook event handled successfully
 *       400:
 *         description: Event type not handled
 *       500:
 *         description: Error handling webhook event
 */
router.post('/api/payment/Payment-confirmation', handlePaymentConfirmation);

module.exports = router;