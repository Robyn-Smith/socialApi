const router = require('express').Router();
const {
  get_all_users,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(get_all_users)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;