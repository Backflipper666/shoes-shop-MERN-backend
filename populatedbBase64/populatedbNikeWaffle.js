require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('../models/shoesModel');

const filePath1 = './imagesToUpload/nike-waffle/nike-w1.png';
const filePath2 = './imagesToUpload/nike-waffle/nike-w2.png';
const filePath3 = './imagesToUpload/nike-waffle/nike-w3.png';
const filePath4 = './imagesToUpload/nike-waffle/nike-w4.jpg';

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
  contentType: 'image/png', // Replace with the actual content type of your image
};

const image2 = {
  data: base64Image2,
  contentType: 'image/png', // Replace with the actual content type of your image
};

const image3 = {
  data: base64Image3,
  contentType: 'image/png', // Replace with the actual content type of your image
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
      title: 'NIKE WAFFLE ONE',
      description:
        "Original New Arrival NIKE NIKE WAFFLE ONE SE Men's Running Shoes Sneakers",
      brand: 'Nike',
      price: 58000,
      color: 'grey',
      size: 42,
      material: 'Synthetic Leather',
      stock: 50,
      // Other shoe data omitted for brevity

      image: image1,
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
