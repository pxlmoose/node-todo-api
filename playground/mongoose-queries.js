const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5b06b94a7cc77705d06fca7b';
// let id = '5b0d2f7281a6ff45dc9d22b211';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

// Todo.find({
//   _id: id   //mongoose is going to convert string to object for you
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));
