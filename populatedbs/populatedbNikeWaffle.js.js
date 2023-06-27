//populatedb.js
require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('../models/shoesModel'); // Replace with the actual path to your shoes model

const imageBuffer1 = fs.readFileSync(
  './imagesToUpload/nike-waffle/nike-w1.png'
);
const imageBuffer2 = fs.readFileSync(
  './imagesToUpload/nike-waffle/nike-w2.png'
);
const imageBuffer3 = fs.readFileSync(
  './imagesToUpload/nike-waffle/nike-w3.png'
);
const imageBuffer4 = fs.readFileSync(
  './imagesToUpload/nike-waffle/nike-w4.jpg'
);

const filePath = './imagesToUpload/nike-waffle/nike-w4.jpg';
const imageBuffer = fs.readFileSync(filePath);
const base64Image = imageBuffer.toString('base64');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const image = {
  data: imageBuffer1,
  contentType: 'image/png', // Replace with the actual content type of your image
};
const image2 = {
  data: imageBuffer2,
  contentType: 'image/png', // Replace with the actual content type of your image
};

const image3 = {
  data: imageBuffer3,
  contentType: 'image/png', // Replace with the actual content type of your image
};

const image4 = {
  data: imageBuffer4,
  contentType: 'image/jpg', // Replace with the actual content type of your image
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  // Create an array of shoe documents to insert
  const shoes = [
    {
      title: 'NIKE WAFFLE ONE',
      description:
        "Original New Arrival NIKE NIKE WAFFLE ONE SE Men's Running Shoes Sneakers",
      brand: 'Nike',
      price: 58000,
      color: 'grey',
      size: 42,
      material: 'Synthetic Leather',
      stock: 50,
      image: image,
      image2,
      image3,
      image4,

      rating: 4.5,
      reviews: [
        {
          username: 'Choji',
          comment: 'Real nice!',
        },
        {
          username: 'Uchiha',
          comment: 'Light and comfortable for running.',
        },
      ],
      gender: 'men',
      onSale: true,
      newCollection: true,
      season: 'summer',
      discountPercent: 25,
      newCollection: true,
    },
    // Add more shoe documents as needed
  ];

  try {
    // Insert the shoe documents into the database
    await Shoes.insertMany(shoes);

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error occurred while inserting data:', error);
  }

  // Close the database connection
  db.close();
});
