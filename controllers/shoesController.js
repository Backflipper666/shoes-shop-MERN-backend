const Shoes = require('../models/shoesModel');
const mongoose = require('mongoose');
const fs = require('fs');

//get all shoes
const getShoes = async (req, res) => {
  const allShoes = await Shoes.find({}).sort({ createdAt: -1 });

  res.status(200).json(allShoes);
};

// get a single pair of shoes
const getSingleShoes = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' });
  }

  const singlePairOfShoes = await Shoes.findById(id);

  if (!singlePairOfShoes) {
    return res.status(404).json({ error: 'No such shoes' });
  }
  res.status(200).json(singlePairOfShoes);
};

const createShoes = async (req, res) => {
  const {
    title,
    description,
    brand,
    price,
    color,
    size,
    material,
    stock,
    rating,
    reviews,
    createdAt,
  } = req.body;

  // Get the file details from req.file
  const { filename, path, mimetype } = req.file;

  const pairOfShoes = {
    title,
    description,
    brand,
    price,
    color,
    size,
    material,
    stock,
    image: {
      data: fs.readFileSync(path), // Read the file data as a Buffer
      contentType: mimetype,
    },
    rating,
    reviews,
    createdAt,
  };

  try {
    const shoes = await Shoes.create(pairOfShoes);
    res.status(200).json(shoes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateShoes = async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;

  try {
    const updatedShoes = await Shoes.findOneAndUpdate(
      { _id: id }, // Filter for the document to update
      updateFields, // Update the fields based on the request body
      { new: true } // Return the updated document
    );

    res.status(200).json(updatedShoes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteShoes = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such shoes' });
  }
  try {
    const deletePairOfShoes = await Shoes.deleteOne({ _id: id });
    res.status(200).json({
      message: 'Pair of shoes deleted successfully',
      deleted: deletePairOfShoes,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createShoes,
  getShoes,
  getSingleShoes,
  updateShoes,
  deleteShoes,
};
