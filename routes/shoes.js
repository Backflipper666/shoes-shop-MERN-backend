const {
  getShoes,
  createShoes,
  getSingleShoes,
  updateShoes,
  deleteShoes,
} = require('../controllers/shoesController');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files'); // Replace with your desired destination folder path
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

/* GET shoes listing. */
router.get('/', getShoes);

//get a single pair of shoes

router.get('/:id', getSingleShoes);

//create a new pair of shoes
router.post('/', upload.single('image'), createShoes);

//delete a pair of shoes
router.delete('/:id', deleteShoes);

//update a pair of shoes
router.patch('/:id', upload.single('image'), updateShoes);

module.exports = router;
