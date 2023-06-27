require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('../models/shoesModel');

const filePath1 = './imagesToUpload/women-shoes/women-1.jpg';
const filePath2 = './imagesToUpload/women-shoes/women-2.jpg';
const filePath3 = './imagesToUpload/women-shoes/women-3.jpg';
const filePath4 = './imagesToUpload/women-shoes/women-4.jpg';

const image1Buffer = fs.readFileSync(filePath1);
const image2Buffer = fs.readFileSync(filePath2);
const image3Buffer = fs.readFileSync(filePath3);
const image4Buffer = fs.readFileSync(filePath4);

const base64Image1 = image1Buffer.toString('base64');
const base64Image2 = image2Buffer.toString('base64');
const base64Image3 = image3Buffer.toString('base64');
const base64Image4 = image4Buffer.toString('base64');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const image1 = {
  data: base64Image1,
  contentType: 'image/jpeg', // Replace with the actual content type of your image
};

const image2 = {
  data: base64Image2,
  contentType: 'image/jpeg', // Replace with the actual content type of your image
};

const image3 = {
  data: base64Image3,
  contentType: 'image/jpeg', // Replace with the actual content type of your image
};

const image4 = {
  data: base64Image4,
  contentType: 'image/jpeg', // Replace with the actual content type of your image
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  const shoes = [
    {
      title: 'Hippity hoppity',
      description: 'Really warm ,Get off my property',
      brand: 'Puma',
      price: 14000,
      color: 'brown',
      size: 37,
      material: 'Synthetic Leather',
      stock: 90,
      // Other shoe data omitted for brevity

      image: image1,
      image2,
      image3,
      image4,
      rating: 4.5,
      rating: 4.5,
      reviews: [
        {
          username: 'Dark Horse',
          comment: 'Great shoes!',
        },
        {
          username: 'Uchiha',
          comment: 'Light and comfortable for running.',
        },
      ],
      gender: 'women',
      onSale: true,
      discountPercent: 15,
      newCollection: true,
      season: 'winter',

      // Other shoe data omitted for brevity
    },
    // Add more shoe documents as needed
  ];

  try {
    await Shoes.insertMany(shoes);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error occurred while inserting data:', error);
  }

  db.close();
});
