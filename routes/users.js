//users.js
var express = require('express');
const requireAuth = require('../middleware/requireAuth');

//controller functions
const {
  loginUser,
  signupUser,
  addToFavorites,
  removeFromFavorites,
  getUserItems,
} = require('../controllers/userController');
var router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
//add to favorites only of the user is authenticated

router.patch('/add-to-favorites', requireAuth, addToFavorites);
router.patch('/remove-from-favorites', requireAuth, removeFromFavorites);
router.get('/items', requireAuth, getUserItems);

module.exports = router;
