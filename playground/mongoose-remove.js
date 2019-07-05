const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

//Todo.findOneAndRemove()
Todo.findByIdAndRemove('5d1efb0486ec303c15ac92b7').then((todo) => {
    console.log(todo);
})
