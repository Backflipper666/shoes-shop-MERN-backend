require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('../models/shoesModel');

const filePath1 = './imagesToUpload/new-balance-women/new-balance-women2.png';
const filePath2 = './imagesToUpload/new-balance-women/new-balance-women3.jpg';
const filePath3 = './imagesToUpload/new-balance-women/new-balance-women4.png';
const filePath4 = './imagesToUpload/new-balance-women/new-balance-women4.png';

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
  contentType: 'image/jpeg', // Replace with the actual content type of your image
};

const image3 = {
  data: base64Image3,
  contentType: 'image/png', // Replace with the actual content type of your image
};

const image4 = {
  data: base64Image4,
  contentType: 'image/png', // Replace with the actual content type of your image
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  const shoes = [
    {
      title: 'Zapatos',
      description:
        'Women Luxury Sports Shoes 2023 Spring Autumn New Air Mesh Color Block Popular Trendy Soft Sole Casual Sneakers Zapatos De Muje',
      brand: 'New balance',
      price: 4942,
      color: 'white',
      size: 37,
      material: 'Synthetic',
      stock: 92,

      image: image1,
      image2,
      image3,
      image4,
      rating: 5,
      reviews: [
        {
          username: 'Vegeta',
          comment:
            'Put on, quite fit, the sole is also thick, the place of the shoe mouth is also done very soft, should not wear feet, very satisfied!',
        },
      ],
      gender: 'women',
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
