const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true
  },
  name: {
    id: Number,
    firstName: String,
    lastName: String,
    username: String
  }
});

let User = mongoose.model('User', userSchema);

let saveUser = (usersJSON) => {

};

module.exports.saveUser = saveUser;

let getUser = () => {
  return User.find();
};

module.exports.getUser = getUser;