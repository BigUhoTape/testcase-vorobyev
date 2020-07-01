const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.set('PORT', 8081);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));


//Routes
app.use('/api/todos', require('./Routes/TodoRoute'));

async function start() {
  try {
    await mongoose.connect('mongodb+srv://Ivan:sofebo39@sneakvibe-2gt0p.mongodb.net/sneakVibe', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true
    });

    app.listen(app.get('PORT'), () => {
      console.log('Server has been started on port: ', app.get('PORT'));
    })
  } catch (e) {
    console.log(e);
  }
}

start();
