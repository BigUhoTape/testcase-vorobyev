const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  name: String,
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = model('Todo', todoSchema);
