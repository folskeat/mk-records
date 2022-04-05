const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/mk-records', {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  track: String,
  racer: String,
  minute: String,
  second: String,
  milli: String,
  character: String,
  body: String,
  wheels: String,
  glider: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    track: req.body.track,
    racer: req.body.racer,
    minute: req.body.minute,
    second: req.body.second,
    milli: req.body.milli,
    character: req.body.character,
    body: req.body.body,
    wheels: req.body.wheels,
    glider: req.body.glider,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Change an existing item
app.put('/api/items/:id', async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.minute = req.body.minute;
    item.second = req.body.second;
    item.milli = req.body.milli;
    item.character = req.body.character;
    item.body = req.body.body;
    item.wheels = req.body.wheels;
    item.glider = req.body.glider;
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
