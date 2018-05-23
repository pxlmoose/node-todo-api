// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // decunstructor - creates variable with {name} nad and gives it value of object property


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');//return stops code if err is true
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').insertOne({
  //   text: 'Asia ma duze oczy',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2)); //ops stores all inderted documents
  // });
  //
  // db.collection('Users').insertOne({
  //   name: 'Jane',
  //   age: 18,
  //   location: 'Babe City'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
