const Users = require('./index.js');

module.exports = {
  //finds a user by their respective id in Users and returns all fields associated with them.
  findOne:(id, callback) =>{
    Users
      .find({"__v": Number(id)}, function(err,obj){
        console.log(obj);
      });
  },
  //gets profile picture of specified username and returns the url of the image
  getProfilePicture:(username, callback)=>{
    Users
      .findOne({'userName': `${username}`}, function(err,obj){
        console.log(obj.profileImage)
      });
  },
  //returns all data associated with a username
  getUserData:(username) => {
    return Users.findOne({"userName": `${username}`})
  },

  Users: Users
}