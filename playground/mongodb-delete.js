// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // decunstructor - creates variable with {name} nad and gives it value of object property


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');//return stops code if err is true
  }
  console.log('Connected to MongoDB server');

//deleteMmany
  // db.collection('Todos').deleteMany({
  //     text: "Eat Lunch"
  // }).then( (result) => {
  //   console.log(result);
  // });

//deleteOne
// db.collection('Todos').deleteOne({
//   text: "Eat lunch"
// }).then( (result) => {
//   console.log(result);
// });


//findOneAndDelete
// db.collection('Todos').findOneAndDelete({
//   completed: false
// }).then( (result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({
//   name: 'Jane'
// }).then((result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5b03f867b4d1631bc09c91af')
}).then((result) => {
  console.log(result);
});





  // db.close();
});
