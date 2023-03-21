'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const Item = require('./models/item');

async function seed() {

  await Item.create({
    category: 'Car',
    itemName: 'Windshield Wipers',
    links: '26in and 17in https://a.co/d/cTnMEBe'
  });
  console.log('Windshield Wipers added');

  await Item.create({
    category: 'Bathroom',
    itemName: 'Toilet Paper',
    links: 'https://a.co/d/9FECw7s'
  });
  console.log('Toilet paper was added')
  mongoose.disconnect();
}

seed();