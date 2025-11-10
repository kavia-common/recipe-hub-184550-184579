/**
 * Controller for recipe endpoints.
 */
const store = require('../data/store');
const { validateRecipePayload } = require('../utils/validation');

class RecipesController {
  // PUBLIC_INTERFACE
  list(req, res) {
    /** List all recipes. */
    const data = store.getAllRecipes();
    return res.status(200).json(data);
  }

  // PUBLIC_INTERFACE
  getById(req, res, next) {
    /** Get a recipe by id param. */
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ status: 'error', message: 'Invalid recipe id' });
    }
    const recipe = store.getRecipeById(id);
    if (!recipe) {
      return res.status(404).json({ status: 'error', message: 'Recipe not found' });
    }
    return res.status(200).json(recipe);
  }

  // PUBLIC_INTERFACE
  create(req, res, next) {
    /** Create a recipe with basic validation. */
    const errors = validateRecipePayload(req.body, { partial: false });
    if (errors.length) {
      const err = new Error('Validation failed');
      err.status = 400;
      err.details = errors;
      return next(err);
    }
    const created = store.createRecipe(req.body);
    return res.status(201).json(created);
  }

  // PUBLIC_INTERFACE
  update(req, res, next) {
    /** Update a recipe by id with validation (partial allowed). */
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ status: 'error', message: 'Invalid recipe id' });
    }
    const errors = validateRecipePayload(req.body, { partial: true });
    if (errors.length) {
      const err = new Error('Validation failed');
      err.status = 400;
      err.details = errors;
      return next(err);
    }
    const updated = store.updateRecipe(id, req.body);
    if (!updated) {
      return res.status(404).json({ status: 'error', message: 'Recipe not found' });
    }
    return res.status(200).json(updated);
  }

  // PUBLIC_INTERFACE
  delete(req, res) {
    /** Delete a recipe by id. */
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ status: 'error', message: 'Invalid recipe id' });
    }
    const ok = store.deleteRecipe(id);
    if (!ok) {
      return res.status(404).json({ status: 'error', message: 'Recipe not found' });
    }
    return res.status(204).send();
  }
}

module.exports = new RecipesController();
