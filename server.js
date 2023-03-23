'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Item = require('./models/item');
const mongoose = require('mongoose');
const db = mongoose.connection;
const verifyUser = require('./auth')
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});

app.get('/items', getItems);
app.post('/items', postItem);
app.delete('/items/:id', deleteItem)
app.put('/items/:id', putItem);

async function getItems(req, res, next) {
  verifyUser(req, async (err, user)=> {
    console.log(user.email);
     if(err){
       console.error(err);
       res.send('invalid token');
     } else{
      try {
        let results = await Item.find({email: user.email});
        res.status(200).send(results);
      } catch(err) {
        next(err);
      }
    }  
  });
}

async function postItem (req, res, next) {
  try{
    let createdItem = await Item.create(req.body);
    res.status(200).send(createdItem);
  } catch (error){
    next(error);
  }
}

async function deleteItem (req, res, next) {
  try{
    let id = req.params.id;
    await Item.findByIdAndDelete(id);
    res.status(200).send('Item Deleted');
  } catch (error){
    next(error);
  }
}

async function putItem (req, res, next) {
  try{
    let id = req.params.id;
    let updatedItem = req.body;
    let updatedItemFromDB = await Item.findByIdAndUpdate(id, updatedItem, {new: true, overwrite: true});
    res.status(200).send(updatedItemFromDB);
  } catch (error){
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Not availabe');
});

app.get('/test', (request, response) => {
  response.send('test request received')
})

app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
