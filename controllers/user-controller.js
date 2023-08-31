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

// // Add Friend  
//   async add_friend(req, res) {
//     try {
//       const user = await User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $addToSet: { friends: req.params.friendId } },
//         { runValidators: true, new: true }
//       );

//       if (!user) {
//         return res.status(404).json({ message: 'No user with this id!' });
//       }
//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   //remove friend
//   async remove_friend(req, res) {
//     try {
//       const user = await User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $pull: { friends: req.params.friendId } },
//         { runValidators: true, new: true }
//       );

//       if (!user) {
//         return res.status(404).json({ message: 'No user with this id!' });
//       }

//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };
    // Add a friend
    // add_friend({ params, body }, res) {
    //     User.findOneAndUpdate(
    //       { _id: params.userId },
    //       { $push: { friends: body } },
    //       { new: true, runValidators: true }
    //     )
    //       .then(db_user_data => {
    //         if (!db_user_data) {
    //           res.status(404).json({ message: 'Error no thoughts found with chosen id' });
    //           return;
    //         }
    //         res.json(db_user_data);
    //       })
    //       .catch(error => res.json(error));
    //   },
    
    //   // Remove a reaction
    //   remove_friend({ params }, res) {
    //     User.findOneAndDelete(
    //       { _id: params.userId },
    //       { $pull: { friends: { friendsId: params.friendsId } } },
    //       { new: true }
    //     )
    //       .then(db_user_data => {
    //         if (!db_user_data) {
    //           res.status(404).json({ message: 'Error no thoughts found with chosen id' });
    //           return;
    //         }
    //         res.json(db_user_data);
    //       })
    //       .catch(error => res.json(error));
    //   }
    // },
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

  remove_friend({params}, res) {
    User.findOneAndUpdate(
      { _id: params.id},
      { $pull: { friends: { friendId: params.friendId } } },
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