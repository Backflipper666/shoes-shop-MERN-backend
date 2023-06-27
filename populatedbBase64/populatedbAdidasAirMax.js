require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('../models/shoesModel');

const filePath1 = './imagesToUpload/nike-air-max-270/nike-air1.jpg';
const filePath2 = './imagesToUpload/nike-air-max-270/nike-air2.jpg';
const filePath3 = './imagesToUpload/nike-air-max-270/nike-air3.jpg';
const filePath4 = './imagesToUpload/nike-air-max-270/nike-air4.jpg';

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
  contentType: 'image/jpg', // Replace with the actual content type of your image
};

const image2 = {
  data: base64Image2,
  contentType: 'image/jpg', // Replace with the actual content type of your image
};

const image3 = {
  data: base64Image3,
  contentType: 'image/jpg', // Replace with the actual content type of your image
};

const image4 = {
  data: base64Image4,
  contentType: 'image/jpg', // Replace with the actual content type of your image
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  const shoes = [
    {
      title: 'Nike Air Max 270',
      description: "Black shoes look good and regular, dont'they",
      brand: 'Nike',
      price: 68900,
      color: 'black',
      size: 42,
      material: 'Synthetic',
      stock: 1,

      image: image1,
      image2,
      image3,
      image4,
      rating: 5,
      reviews: [
        {
          username: 'Bulma',
          comment: 'My hair is blue, so I bought them, but for my husband',
        },
      ],
      gender: 'men',
      onSale: true,
      newCollection: false,
      season: 'winter',
      discountPercent: 10,
      newCollection: true,
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
