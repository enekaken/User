const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email:{
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  userName: {
    type: String
  },
  profileImage:{
    type: String
  },
  profileHeaderImage:{
    type: String
  },
  workouts:{
    type: Array
  }
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;