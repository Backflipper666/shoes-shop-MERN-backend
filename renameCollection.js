const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
require('dotenv').config(); // Add this line at the top of your script
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  try {
    const oldCollectionName = 'shoes'; // Replace with the actual name of the collection
    const newCollectionName = 'sneakers'; // Replace with the new name you want to assign

    await db.db.renameCollection(oldCollectionName, newCollectionName);

    console.log('Collection renamed successfully.');
  } catch (error) {
    console.error('Error occurred while renaming the collection:', error);
  }

  db.close();
});
