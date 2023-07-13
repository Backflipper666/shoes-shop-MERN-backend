const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'images',
  modelName: 'images',
  schema,
};
