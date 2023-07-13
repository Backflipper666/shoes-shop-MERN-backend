//app.js
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const AdminBro = require('admin-bro');
const expressAdminBro = require('@admin-bro/express');
const mongooseAdminBro = require('@admin-bro/mongoose');

const indexRouter = require('./routes/index');
const shoesRouter = require('./routes/shoes');
const userRouter = require('./routes/users');
const fakeRouter = require('./routes/fakeRoute');

const User = require('./models/userModel');
const Shoes = require('./models/shoesModel');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({ origin: '*' }));
app.use('/', indexRouter);
app.use('/api/shoes', shoesRouter);
app.use('/api/user', userRouter);
app.use('/api/fake', fakeRouter);

AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = {
  resources: [
    {
      resource: User,
      options: {
        properties: {
          _id: {
            isVisible: { list: false, show: true, edit: false },
          },
          email: {
            label: 'email',
            isVisible: { list: true, show: true, edit: true },
          },
          password: {
            label: 'password',
            isVisible: { list: false, show: false, edit: false },
          },
        },
      },
    },
    {
      resource: Shoes,
      options: {
        properties: {
          _id: {
            isVisible: { list: false, show: true, edit: false },
          },
          title: {
            label: 'Name',
            isVisible: { list: true, show: true, edit: true },
          },
          description: {
            label: 'Description',
            isVisible: { list: true, show: true, edit: true },
          },
          price: {
            label: 'Price',
            isVisible: { list: true, show: true, edit: true },
          },
        },
      },
    },
  ],
};

const adminBro = new AdminBro(AdminBroOptions);
const router = expressAdminBro.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/files');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log('Connected to the database and listening on port', port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
