const router = require('express').Router();
const {
  get_all_thoughts,
  get_thought_by_id,
  add_thought,
  update_thought,
  remove_thought,
  add_reaction,
  remove_reaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(get_all_thoughts)
  .post(add_thought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(get_thought_by_id)
  .put(update_thought)
  .delete(remove_thought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(add_reaction)
  .delete(remove_reaction);

module.exports = router;