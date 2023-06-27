require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('../models/shoesModel');

const filePath1 = './imagesToUpload/fila-men/fila-men1.jpg';
const filePath2 = './imagesToUpload/fila-men/fila-men2.jpg';
const filePath3 = './imagesToUpload/fila-men/fila-men3.jpg';
const filePath4 = './imagesToUpload/fila-men/fila-men4.jpg';

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
      title: "Men's Corda",
      description:
        "Stylish men's tennis shoes that combine a classic design with comfort. These tennis shoes for men were designed with a classic style in mind.",
      brand: 'Adidas',
      price: 67000,
      color: 'white',
      size: 38,
      material: 'Synthetic',
      stock: 12,
      // Other shoe data omitted for brevity

      image: image1,
      image2,
      image3,
      image4,
      rating: 5,
      reviews: [
        {
          username: 'Gohan',
          comment: 'I llike those shoes',
        },
      ],
      gender: 'men',
      onSale: false,
      newCollection: false,
      season: 'demi',

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
