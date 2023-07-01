//userController.js for chatGPT's convenience
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addToFavorites = async (req, res) => {
  const { email, shoeId } = req.body;

  try {
    const result = await User.addToFavorites(email, shoeId);

    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeFromFavorites = async (req, res) => {
  const { email, shoeId } = req.body;

  try {
    const result = await User.removeFromFavorites(email, shoeId);

    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserItems = async (req, res) => {
  const allUsers = await User.find({}).select('email favorites cart');

  res.status(200).json({ allUsers });
};

module.exports = {
  loginUser,
  signupUser,
  addToFavorites,
  removeFromFavorites,
  getUserItems,
};
