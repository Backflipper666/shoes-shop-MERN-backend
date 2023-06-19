const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  image: {
    data: Buffer, // Embed the image data as a Buffer
    contentType: String, // Specify the content type of the image
  },
});

module.exports = mongoose.model('Image', imageSchema);
