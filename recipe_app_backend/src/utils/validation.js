/**
 * Basic validation utilities.
 * Use these helpers to validate incoming payloads.
 */

// PUBLIC_INTERFACE
function validateRecipePayload(body, { partial = false } = {}) {
  /** Validate recipe payload. When partial=true, all fields are optional. */
  const errors = [];

  const checkString = (val, field) => {
    if (typeof val !== 'string' || val.trim().length === 0) {
      errors.push(`${field} must be a non-empty string`);
    }
  };

  const checkArray = (val, field) => {
    if (!Array.isArray(val)) {
      errors.push(`${field} must be an array`);
    }
  };

  if (!partial) {
    if (body.title === undefined) errors.push('title is required');
    if (body.ingredients === undefined) errors.push('ingredients is required');
    if (body.steps === undefined) errors.push('steps is required');
  }

  if (body.title !== undefined) checkString(body.title, 'title');
  if (body.description !== undefined && typeof body.description !== 'string') {
    errors.push('description must be a string');
  }
  if (body.ingredients !== undefined) {
    checkArray(body.ingredients, 'ingredients');
    if (Array.isArray(body.ingredients) && !body.ingredients.every(i => typeof i === 'string')) {
      errors.push('ingredients must be an array of strings');
    }
  }
  if (body.steps !== undefined) {
    checkArray(body.steps, 'steps');
    if (Array.isArray(body.steps) && !body.steps.every(s => typeof s === 'string')) {
      errors.push('steps must be an array of strings');
    }
  }

  return errors;
}

module.exports = {
  validateRecipePayload
};
