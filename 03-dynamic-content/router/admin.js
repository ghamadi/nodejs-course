import path from 'path';
import express from 'express';
import { viewsPath } from '../paths.js';

const Router = express.Router();

Router.get('/admin/add-product', (req, res, next) => {
  res.sendFile(path.join(viewsPath, 'add-product.html'));
});

Router.post('/admin/add-product', (req, res, next) => {
  console.log('Adding Product', req.body);
  res.redirect('/');
});

export default Router;
