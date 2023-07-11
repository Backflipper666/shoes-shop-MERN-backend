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
const { default: AdminJS } = require('adminjs');
const { buildRouter: AdminJSExpress } = require('@adminjs/express');

const indexRouter = require('./routes/index');
const shoesRouter = require('./routes/shoes');
const userRouter = require('./routes/users');
const fakeRouter = require('./routes/fakeRoute');

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

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

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
    const admin = new AdminJS({
      // Configure AdminJS options here
    });

    const adminRouter = AdminJSExpress.buildRouter(admin);

    app.use(admin.options.rootPath, adminRouter);

    app.listen(port, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
