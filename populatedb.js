require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('./models/shoesModel'); // Replace with the actual path to your shoes model

const imageBuffer = fs.readFileSync('./imagesToUpload/nb/nb1.png');
const imageBuffer2 = fs.readFileSync('./imagesToUpload/nb/nb2.png');
const imageBuffer3 = fs.readFileSync('./imagesToUpload/nb/nb3.png');
const imageBuffer4 = fs.readFileSync('./imagesToUpload/nb/nb4.jpg');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const image = {
  data: imageBuffer,
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
      title: 'Forrest Gump',
      description:
        'Forrest Gump Shoes Women 2023 Spring New Mesh Sneakers Balanced Lightweight Casual Retro Board Trainers',
      brand: 'New balance',
      price: 14000,
      color: 'pink',
      size: 37,
      material: 'Synthetic Leather',
      stock: 90,
      image: image,
      image2,
      image3,
      image4,

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
      onSale: false,
      newCollection: true,
      season: 'summer',
    },
    // Add more shoe documents as needed
  ];

  try {
    // Insert the shoe documents into the database
    await Shoes.deleteOne({ brand: 'New balance' });
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error occurred while inserting data:', error);
  }

  // Close the database connection
  db.close();
});
