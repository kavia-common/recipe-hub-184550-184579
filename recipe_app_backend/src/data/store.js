/**
 * Simple in-memory data store for recipes and users with seed data.
 * This is a temporary store until a real database is integrated.
 */

let nextRecipeId = 3;
let nextUserId = 2;

// Seed recipes
const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pancetta',
      'Parmesan cheese',
      'Black pepper',
      'Salt'
    ],
    steps: [
      'Cook spaghetti in salted water.',
      'Fry pancetta until crisp.',
      'Whisk eggs with grated parmesan.',
      'Combine hot pasta with pancetta, remove from heat, and mix in egg-cheese mixture.',
      'Season with pepper and serve immediately.'
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Chicken Stir Fry',
    description: 'Quick stir fry with chicken and vegetables in a savory sauce.',
    ingredients: [
      'Chicken breast',
      'Bell peppers',
      'Broccoli',
      'Soy sauce',
      'Garlic',
      'Ginger'
    ],
    steps: [
      'Slice chicken and vegetables.',
      'Stir fry chicken until browned; set aside.',
      'Stir fry vegetables until tender-crisp.',
      'Combine chicken with vegetables and add sauce; cook briefly.',
      'Serve with rice.'
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

// Seed users (placeholder)
const users = [
  {
    id: 1,
    username: 'demo',
    displayName: 'Demo User',
    createdAt: new Date().toISOString()
  }
];

// PUBLIC_INTERFACE
function getAllRecipes() {
  /** Returns all recipes as an array. */
  return recipes;
}

// PUBLIC_INTERFACE
function getRecipeById(id) {
  /** Returns a single recipe by numeric id or undefined if not found. */
  return recipes.find(r => r.id === id);
}

// PUBLIC_INTERFACE
function createRecipe(payload) {
  /** Creates a recipe and returns the newly created entity. */
  const now = new Date().toISOString();
  const recipe = {
    id: nextRecipeId++,
    title: payload.title,
    description: payload.description || '',
    ingredients: Array.isArray(payload.ingredients) ? payload.ingredients : [],
    steps: Array.isArray(payload.steps) ? payload.steps : [],
    createdAt: now,
    updatedAt: now,
  };
  recipes.push(recipe);
  return recipe;
}

// PUBLIC_INTERFACE
function updateRecipe(id, payload) {
  /** Updates a recipe by id and returns the updated entity or null if not found. */
  const idx = recipes.findIndex(r => r.id === id);
  if (idx === -1) return null;
  const prev = recipes[idx];
  const updated = {
    ...prev,
    title: payload.title ?? prev.title,
    description: payload.description ?? prev.description,
    ingredients: payload.ingredients ?? prev.ingredients,
    steps: payload.steps ?? prev.steps,
    updatedAt: new Date().toISOString(),
  };
  recipes[idx] = updated;
  return updated;
}

// PUBLIC_INTERFACE
function deleteRecipe(id) {
  /** Deletes a recipe by id and returns true if removed, false if not found. */
  const idx = recipes.findIndex(r => r.id === id);
  if (idx === -1) return false;
  recipes.splice(idx, 1);
  return true;
}

// PUBLIC_INTERFACE
function getAllUsers() {
  /** Returns all users (placeholder). */
  return users;
}

// PUBLIC_INTERFACE
function createUser(payload) {
  /** Creates a placeholder user and returns it. */
  const now = new Date().toISOString();
  const user = {
    id: nextUserId++,
    username: payload.username,
    displayName: payload.displayName || payload.username,
    createdAt: now
  };
  users.push(user);
  return user;
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getAllUsers,
  createUser
};
