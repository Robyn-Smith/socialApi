const router = require('express').Router();
const {
  get_all_users,
  get_user_by_id,
  add_user,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(get_all_users)
  .post(add_user);

// /api/users/:id
router
  .route('/:id')
  .get(get_user_by_id)
  .put(updateUser)
  .delete(deleteUser);


module.exports = router;