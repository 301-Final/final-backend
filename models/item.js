'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;
const itemSchema = new Schema({
  category: {type: String, required: true},
  itemName:  {type: String, required: true},
  links: {type: String, required: true},
});
const ItemModel = mongoose.model('Item', itemSchema);
module.exports = ItemModel;