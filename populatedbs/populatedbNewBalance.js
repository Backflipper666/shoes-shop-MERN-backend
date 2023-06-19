require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const fs = require('fs');
const Shoes = require('./models/shoesModel'); // Replace with the actual path to your shoes model
const imageBuffer = fs.readFileSync(
  './imagesToUpload/new-balance-women/new-balance-women2.png'
);
const imageBuffer2 = fs.readFileSync(
  './imagesToUpload/new-balance-women/new-balance-women4.png'
);
const imageBuffer3 = fs.readFileSync(
  './imagesToUpload/new-balance-women/new-balance-women3.jpg'
);
const imageBuffer4 = fs.readFileSync(
  './imagesToUpload/new-balance-women/new-balance-women4.png'
);

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
  contentType: 'image/jpg', // Replace with the actual content type of your image
};

const image4 = {
  data: imageBuffer4,
  contentType: 'image/png', // Replace with the actual content type of your image
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  // Create an array of shoe documents to insert
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
      image: image,
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
    },
    // Add more shoe documents as needed
  ];

  try {
    //new ObjectId("648baa1c70478cd306167375")
    // Insert the shoe documents into the database
    await Shoes.insertMany(shoes);
    // const it = await Shoes.findOne({ title: 'Zapatos' });
    //Men's corda id:648ba8c7ddded0040c0f1d6b
    /*     await Shoes.updateOne(
      { _id: '648ba8c7ddded0040c0f1d6b' },
      { $set: { hidden: true } }
    ); */
    // console.log(it, 'id is: ');
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error occurred while inserting data:', error);
  }

  // Close the database connection
  db.close();
});
