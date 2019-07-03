const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '5d1b9ef5b71d0e0bc990608b1';

// if(!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("ID not found");
//     }
//     console.log('Todo by Id: ', todo);
// }).catch((err) => {
//     console.log(err);
// })

//challenge

var id = '5d1ba55515379a8b5cf32844';
User.findById(id).then((user) => {
    if (!user) {
        return console.log('ID not found');
    }
    console.log('User: ', JSON.stringify(user, undefined, 2));
}).catch((err) => {
    console.log(err);
})