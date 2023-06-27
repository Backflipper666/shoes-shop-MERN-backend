//userModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');
const { ObjectId } = require('mongodb');

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'shoes',
    },
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'shoes',
    },
  ],
});

userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields must be filled');
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password');
  }
  return user;
};

//static addToFavorites method
userSchema.statics.addToFavorites = async function (email, shoeId) {
  try {
    const user = await this.findOne({ email });

    // Check if the shoeId already exists in the favorites array
    if (user.favorites.includes(shoeId)) {
      throw new Error(`Shoe with ID ${shoeId} already exists in favorites!`);
    }

    // Add the shoeId to the favorites array
    user.favorites.push(shoeId);

    // Save the updated user document
    await user.save();

    return `User ${email} has ${user.favorites.length} favorite shoes!`;
  } catch (error) {
    throw new Error(error.message);
  }
};

userSchema.statics.removeFromFavorites = async function (email, shoeId) {
  try {
    const user = await this.findOne({ email });
    await this.updateOne({ email }, { $pull: { favorites: shoeId } });

    // Save the updated user document
    await user.save();

    return `User ${email} has ${user.favorites.length} favorite shoes!`;
  } catch (error) {
    throw new Error(error.message);
  }
};

userSchema.statics.getUserItems = async function (email) {
  try {
    const user = await User.findOne({ email })
      .select('favorites cart')
      .exec((err, user) => {
        if (err) {
          // Handle error
          console.error(err);
        } else if (!user) {
          // User not found
          console.log('User not found');
        } else {
          // User found, access favorites and cart arrays
          console.log('Favorites:', user.favorites);
          console.log('Cart:', user.cart);
        }
      });
    console.log('uhm, user is: ', user);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mongoose.model('User', userSchema);
