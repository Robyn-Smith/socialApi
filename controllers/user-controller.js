const { User } = require('../models');

const userController = {
  // this function Gets all users
  get_all_users(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(db_user_data => res.json(db_user_data))
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  },

  // this function Get one individual user by id
  get_user_by_id({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(db_user_data => {
        if (!db_user_data) {
          res.status(404).json({ message: 'Error no user with this id' });
          return;
        }
        res.json(db_user_data);
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error);
      });
  },

  // this function makes a new user
  add_user({ body }, res) {
    User.create(body)
      .then(db_user_data => res.json(db_user_data))
      .catch(error => res.status(400).json(error));
  },

  // this function updates an individual user by id
  update_user({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(db_user_data => {
        if (!db_user_data) {
          res.status(404).json({ message: 'Error no user with this id' });
          return;
        }
        res.json(db_user_data);
      })
      .catch(error => res.status(400).json(error));
  },

  // this function removes user
  remove_user({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(db_user_data => {
        if (!db_user_data) {
          res.status(404).json({ message: 'Error no user with this id' });
          return;
        }
        res.json(db_user_data);
      })
      .catch(error => res.status(400).json(error));
  },

  // this function adds friends
    add_friend({params}, res){
      User.findOneAndUpdate(
          {_id: params.id},
          {$push: {friends: params.friendId}},
          {runValidators: true, new: true}
      )
      .then(db_user_data => {
          if(!db_user_data) {
              res.status(404).json({ message: 'No user with this ID!' });
              return;
          }
          res.json(db_user_data);
      })
      .catch(error => res.status(400).json(error));
  },

  // this function removes friends
  remove_friend({params}, res) {
    User.findOneAndUpdate(
      { _id: params.id},
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(db_user_data => {
        if (!db_user_data) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(db_user_data);
      })
      .catch(error => res.json(error));
  
  }
};

module.exports = userController;