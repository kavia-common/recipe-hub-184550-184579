const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Placeholder users routes
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: List users (placeholder)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Array of users
 */
router.get('/', controller.list.bind(controller));

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create user (placeholder)
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username]
 *             properties:
 *               username: { type: string }
 *               displayName: { type: string }
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
router.post('/', controller.create.bind(controller));

module.exports = router;
