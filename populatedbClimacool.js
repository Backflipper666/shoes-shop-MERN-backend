require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('./models/shoesModel');
const { ObjectId } = require('mongodb');

const filePath1 = './imagesToUpload/adidas-climacool/adidas1.png';
const filePath2 = './imagesToUpload/adidas-climacool/adidas2.png';
const filePath3 = './imagesToUpload/adidas-climacool/adidas3.png';
const filePath4 = './imagesToUpload/adidas-climacool/adidas4.png';

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
  contentType: 'image/png', // Replace with the actual content type of your image
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  const shoes = [
    {
      title: 'Adidas Noice',
      description:
        "Original New Arrival Adidas CLIMACOOL Women's Running Shoes Sneakers",
      brand: 'Adidas',
      price: 58642,
      color: 'grey',
      size: 36,
      material: 'Leather',
      stock: {
        colors: {
          grey: {
            sizes: {
              36: 2,
            },
          },
          red: {
            sizes: {
              37: 3,
            },
          },
        },
      },
      // Other shoe data omitted for brevity

      image: image1,
      image2,
      image3,
      image4,
      rating: 5,
      reviews: [
        {
          username: 'Chichi',
          comment: "It's really comfortable to run wearing those",
        },
      ],
      gender: 'women',
      onSale: false,
      newCollection: false,
      season: 'summer',

      // Other shoe data omitted for brevity
    },
    // Add more shoe documents as needed
  ];

  try {
    await Shoes.insertMany(shoes);
    // await Shoes.renameCollection('sneakers');
    // await Shoes.deleteOne({ _id: '64a04fc6f7a08572662339b9' });
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error occurred while inserting data:', error);
  }

  db.close();
});
