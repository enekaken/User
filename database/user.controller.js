import UserModel from './schema.js';

exports.create_user = (req, res) =>{
  let userBody = req.body;
  const newUser = new UserModel(userBody);
  newUser.save()
    .then(saved => {
      if(!saved){
        return res.status(400).send('unable to save, try again');
      } else if (saved) {
        return res.status(201).send('user created');
      }
    }).catch(error =>{
      return res.status(500).send('error occurred');
    });
};