const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = model('Todo', todoSchema);
