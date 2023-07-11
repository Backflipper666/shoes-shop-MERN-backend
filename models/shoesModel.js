//ShoesModel.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoesSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 300,
  },
  brand: {
    type: String,
    enum: ['FILA', 'Nike', 'Adidas', 'Puma', 'Other'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: String,
  stock: {
    colors: {
      type: Map,
      of: {
        sizes: {
          type: Map,
          of: Number,
        },
      },
    },
  },
  image: {
    data: String, // Embed the image data as a Buffer
    contentType: String, // Specify the content type of the image
  },
  image2: {
    data: String, // Embed the image data as a Buffer
    contentType: String, // Specify the content type of the image
  },
  image3: {
    data: String, // Embed the image data as a Buffer
    contentType: String, // Specify the content type of the image
  },
  image4: {
    data: String, // Embed the image data as a Buffer
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
  onSale: {
    type: Boolean,
    default: false,
    required: false,
  },
  discountPercent: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
    required: false,
  },
  newCollection: {
    type: Boolean,
    default: false,
  },
  season: {
    type: String,
    enum: ['summer', 'winter', 'demi'],
  },
});

module.exports = mongoose.model('Shoes', shoesSchema);
