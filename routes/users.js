var express = require('express');

//controller functions
const { loginUser, signupUser } = require('../controllers/userController');
var router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);

module.exports = router;
