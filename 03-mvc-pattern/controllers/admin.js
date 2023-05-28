import express from 'express';
import Product from '../models/product.js';

const AdminRouter = express.Router();

AdminRouter.get('/products', (req, res, next) => {
  res.redirect('/shop/products');
});

AdminRouter.get('/add-product', (req, res, next) => {
  res.render('main-layout', {
    path: req.path,
    page: 'admin/add-product-page'
  });
});

AdminRouter.post('/add-product', (req, res, next) => {
  new Product(req.body).save();
  res.redirect('/');
});

export default AdminRouter;
