var seeder = require('mongoose-seed');

const db = "mongodb://localhost:27017/user";

const data = [
  {
    'model': 'users',
    'documents': [
      {
        "name": "John",
        "lastName": "Test",
        "email": "Johntest@gmail.com",
        "age": 24,
        "gender": "Male",
        "height": 70,
        "weight": 200,
        "userName": "TheTest2020",
        "profileImage": "https://waterfordwhispersnews.com/wp-content/uploads/2020/03/8db2857d49c6a765f3c9b3c4d53e58af.jpg",
        "profileHeaderImage": "https://www.howtogeek.com/wp-content/uploads/2018/08/shutterstock_407554567.jpg",
      }
    ]
  }

];

//connect seeder to database
seeder.connect(db, function(){
  //load the user model
  seeder.loadModels([
    'database/schema.js'
  ]);
  //deletes the current users
  seeder.clearModels(['users'], function(){
    seeder.populateModels(data, function(err, done){
      if (err){
        return console.error('error', err)
      }
      if(done){
        console.log('seeding done', done)
      }
      seeder.disconnect();
    });
  });
  //runs the seed with data supplied above


});

