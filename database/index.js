var mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', (error)=> console.error('connection error:', error));
db.once('open', () => console.log('Connected to database with Mongoose!'));
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
});

const Users = mongoose.model("user", userSchema);
module.exports = Users;
const userRouter = require('../routes/user');
app.use('/user', userRouter);

app.listen(5000, () => console.log('server live on port 5000'));