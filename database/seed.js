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
        "workouts": [
          {
            date: "6/10/2020",
            workoutId: 1,
            calories: Math.ceil(Math.random() * 2000),
            BPM: Math.ceil(Math.random() * (200 - 60) + 60),
            duration: Math.ceil(Math.random() * 600),
            group: "arms"
          },
          {
            date: "6/9/2020",
            workoutId: 3,
            calories: Math.ceil(Math.random() * 2000),
            BPM: Math.ceil(Math.random() * (200 - 60) + 60),
            duration: Math.ceil(Math.random() * 600),
            group: "core"
          },
          {
            date: "6/8/2020",
            workoutId: 5,
            calories: Math.ceil(Math.random() * 2000),
            BPM: Math.ceil(Math.random() * (200 - 60) + 60),
            duration: Math.ceil(Math.random() * 600),
            group: "cardio"
          },
          {
            date: "6/6/2020",
            workoutId: 6,
            calories: Math.ceil(Math.random() * 2000),
            BPM: Math.ceil(Math.random() * (200 - 60) + 60),
            duration: Math.ceil(Math.random() * 600),
            group: "shoulders"
          },
          {
            date: "6/5/2020",
            workoutId: 3,
            calories: Math.ceil(Math.random() * 2000),
            BPM: Math.ceil(Math.random() * (200 - 60) + 60),
            duration: Math.ceil(Math.random() * 600),
            group: "arms"
          },
          {
            date: "6/4/2020",
            workoutId: 2,
            calories: Math.ceil(Math.random() * 2000),
            BPM: Math.ceil(Math.random() * (200 - 60) + 60),
            duration: Math.ceil(Math.random() * 600),
            group: "legs"
          },
          {
            date: "6/3/2020",
            workoutId: 5,
            calories: Math.ceil(Math.random() * 2000),
            BPM: Math.ceil(Math.random() * (200 - 60) + 60),
            duration: Math.ceil(Math.random() * 600),
            group: "whole body"
          }
        ]
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

