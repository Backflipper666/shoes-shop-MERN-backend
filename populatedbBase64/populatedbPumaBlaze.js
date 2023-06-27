require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('../models/shoesModel');

const filePath1 = './imagesToUpload/puma-blaze/puma1.jpg';
const filePath2 = './imagesToUpload/puma-blaze/puma2.jpg';
const filePath3 = './imagesToUpload/puma-blaze/puma3.jpg';
const filePath4 = './imagesToUpload/puma-blaze/puma4.jpg';

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
      title: 'PUMA TRC Blaze',
      description: "Warmest and nicest I'have ever worn",
      brand: 'Puma',
      price: 72000,
      color: 'white',
      size: 43,
      material: 'Synthetic',
      stock: 3,

      image: image1,
      image2,
      image3,
      image4,
      rating: 5,
      reviews: [
        {
          username: 'Piccolo',
          comment: 'They are warm',
        },
      ],
      gender: 'men',
      onSale: false,
      newCollection: false,
      season: 'winter',
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
