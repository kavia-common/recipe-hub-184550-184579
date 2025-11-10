const express = require('express');
const controller = require('../controllers/recipes');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Recipes
 *     description: Recipe management
 */

/**
 * @swagger
 * /api/recipes:
 *   get:
 *     summary: List all recipes
 *     tags: [Recipes]
 *     responses:
 *       200:
 *         description: Array of recipes
 */
router.get('/', controller.list.bind(controller));

/**
 * @swagger
 * /api/recipes/{id}:
 *   get:
 *     summary: Get recipe by ID
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Recipe object
 *       404:
 *         description: Not found
 */
router.get('/:id', controller.getById.bind(controller));

/**
 * @swagger
 * /api/recipes:
 *   post:
 *     summary: Create a new recipe
 *     tags: [Recipes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, ingredients, steps]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items: { type: string }
 *               steps:
 *                 type: array
 *                 items: { type: string }
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation error
 */
router.post('/', controller.create.bind(controller));

/**
 * @swagger
 * /api/recipes/{id}:
 *   put:
 *     summary: Update a recipe
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               description: { type: string }
 *               ingredients:
 *                 type: array
 *                 items: { type: string }
 *               steps:
 *                 type: array
 *                 items: { type: string }
 *     responses:
 *       200:
 *         description: Updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Not found
 */
router.put('/:id', controller.update.bind(controller));

/**
 * @swagger
 * /api/recipes/{id}:
 *   delete:
 *     summary: Delete a recipe
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       204:
 *         description: Deleted
 *       404:
 *         description: Not found
 */
router.delete('/:id', controller.delete.bind(controller));

module.exports = router;
