const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  title: String,
  description: String,
  brand: String,
  price: Number,
  color: String,
  stock: {
    colors: {
      grey: {
        sizes: {
          36: Number,
        },
      },
      red: {
        sizes: {
          37: Number,
        },
      },
    },
  },
  image: {
    data: String,
    contentType: String,
  },
  image2: {
    data: String,
    contentType: String,
  },
  image3: {
    data: String,
    contentType: String,
  },
  image4: {
    data: String,
    contentType: String,
  },
  rating: Number,
  reviews: [{
    username: String,
    comment: String,
  }],
  gender: String,
  onSale: Boolean,
  discountPercent: Number,
  newCollection: Boolean,
  season: String,
  createdAt: Date,
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'shoes',
  modelName: 'shoes',
  schema,
};
