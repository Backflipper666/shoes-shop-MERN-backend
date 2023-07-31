// admin.js
/*
const express = require('express');
const adminRouter = express.Router();

const AdminBro = require('admin-bro');
const expressAdminBro = require('@admin-bro/express');
const mongooseAdminBro = require('@admin-bro/mongoose');

const User = require('../models/userModel');
const Shoes = require('../models/shoesModel');

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

adminRouter.use(adminBro.options.rootPath, router);

module.exports = adminRouter;
*/
