const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoesSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3, // Minimum of 3 characters
    maxlength: 100, // Maximum of 100 characters
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 300,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Minimum price of 0
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
    min: 1, // Minimum size of 1
  },
  material: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    data: Buffer, // Embed the image data as a Buffer
    contentType: String, // Specify the content type of the image
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  reviews: [
    {
      username: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    enum: ['men', 'women', 'kids'],
    required: true,
  },
});

module.exports = mongoose.model('Shoes', shoesSchema);
