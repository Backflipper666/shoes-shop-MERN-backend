const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  email: String,
  password: String,
  favorites: { type: [Mongoose.Schema.Types.ObjectId], ref: 'sneakers' },
}, {
  timestamps: false,
});

module.exports = {
  collectionName: 'users',
  modelName: 'users',
  schema,
};
