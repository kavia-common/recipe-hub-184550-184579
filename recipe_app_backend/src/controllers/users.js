/**
 * Placeholder users controller.
 */
const store = require('../data/store');

class UsersController {
  // PUBLIC_INTERFACE
  list(req, res) {
    /** List users (placeholder). */
    const users = store.getAllUsers();
    return res.status(200).json(users);
  }

  // PUBLIC_INTERFACE
  create(req, res) {
    /** Create user (placeholder). */
    const { username, displayName } = req.body || {};
    if (!username || typeof username !== 'string') {
      return res.status(400).json({ status: 'error', message: 'username is required and must be a string' });
    }
    const created = store.createUser({ username, displayName });
    return res.status(201).json(created);
  }
}

module.exports = new UsersController();
