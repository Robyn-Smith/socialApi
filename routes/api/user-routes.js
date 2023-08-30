const router = require('express').Router();
const {
  get_all_users,
  get_user_by_id,
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
  .get(get_user_by_id)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;