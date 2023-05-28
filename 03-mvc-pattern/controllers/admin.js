import express from 'express';
import Product from '../models/product.js';

const AdminRouter = express.Router();

AdminRouter.get('/admin/add-product', (req, res, next) => {
  res.render('main-layout', {
    path: req.path,
    page: '/admin/add-product-page'
  });
});

AdminRouter.post('/admin/add-product', (req, res, next) => {
  new Product(req.body).save();
  res.redirect('/');
});

export default AdminRouter;
