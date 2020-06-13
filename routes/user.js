const express = require('express');
const router = express.Router();
const User = require('../database/dbhelpers');

router.get('/', (req,res)=>{
  res.send('hello from get')
})


//get a user by name and return all fields
router.get('/:userName', (req,res) => {
  console.log(req.params.userName, "req.params in router");
  User
    .getUserData(req.params.userName)
    .then((data) => {
      //console.log(data)
      res.send(data)})
  // User.Users.find({}).then((data)=> {
  //   console.log(data);
  //   res.send();
  // }).catch((error) => res.send(error))
})

router.post('/', (req,res)=>{
  const user = {
    "name": "new",
    "lastName": "new",
    "email": "new@gmail.com",
    "age": 24,
    "gender": "Male",
    "height": 70,
    "weight": 200,
    "userName": "new",
    "profileImage": "https://waterfordwhispersnews.com/wp-content/uploads/2020/03/8db2857d49c6a765f3c9b3c4d53e58af.jpg",
    "profileHeaderImage": "https://www.howtogeek.com/wp-content/uploads/2018/08/shutterstock_407554567.jpg",
  }
  User.Users.create(user).then(() => {
    console.log('created user');
  }).then(()=>{
    return User.Users.find()

  }).then((users)=>{
    res.send(users)
  }).catch(console.log)
})
//**NOTE TO SELF**
//put updates all, patch is for one piece
//update a user's username
router.patch('/:userName', (req, res) =>{

})

//delete a user
router.delete('/:userName', (req,res)=>{

})

module.exports = router;