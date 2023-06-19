require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('../models/shoesModel'); // Replace with the actual path to your shoes model
const imageBuffer = fs.readFileSync(
  './imagesToUpload/adidas-women/adidas-women1.jpg'
);
const imageBuffer2 = fs.readFileSync(
  './imagesToUpload/adidas-women/adidas-women2.jpg'
);
const imageBuffer3 = fs.readFileSync(
  './imagesToUpload/adidas-women/adidas-women3.jpg'
);
const imageBuffer4 = fs.readFileSync(
  './imagesToUpload/adidas-women/adidas-women4.jpg'
);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const image = {
  data: imageBuffer,
  contentType: 'image/jpg', // Replace with the actual content type of your image
};
const image2 = {
  data: imageBuffer2,
  contentType: 'image/jpg', // Replace with the actual content type of your image
};

const image3 = {
  data: imageBuffer3,
  contentType: 'image/jpg', // Replace with the actual content type of your image
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
      title: 'Adidas CLIMACOOL',
      description:
        "Original New Arrival Adidas CLIMACOOL Women's Running Shoes Sneakers",
      brand: 'Adidas',
      price: 56000,
      color: 'grey',
      size: 38,
      material: 'Leather',
      stock: 9,
      image: image,
      image2,
      image3,
      image4,

      rating: 5,
      reviews: [
        {
          username: 'Hippity',
          comment: 'Hoppity',
        },
      ],
      gender: 'women',
      onSale: false,
      newCollection: true,
      season: 'summer',
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
