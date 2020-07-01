const { Router } = require('express');
const Todo = require('./../Models/TodoSchema');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.json({ todos });
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = new Todo({
      name: req.body.name
    });
    await todo.save();
    return res.json({ todo });
  } catch (e) {
    console.log(e);
  }
});

router.put('/', async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.body._id, req.body);
    return res.status(200).json({title: 'Updated'});
  } catch (e) {
    console.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    return res.json({ title: 'Deleted' });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
