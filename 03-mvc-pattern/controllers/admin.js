import express from 'express';
import Product from '../models/product.js';

const AdminRouter = express.Router();

AdminRouter.get('/products', async (req, res, next) => {
  try {
    const products = await Product.fetchAllProducts();
    console.log(req.baseUrl, req.url);
    res.render('main-layout', {
      page: 'admin/products-page',
      path: req.baseUrl + req.path,
      prods: products
    });
  } catch (error) {
    console.error('[Product] fetching products failed', err);
    res.status(500).send('<h1> Error fetching the data </h1>');
  }
});

AdminRouter.get('/add-product', (req, res, next) => {
  res.render('main-layout', {
    path: req.baseUrl + req.path,
    page: 'admin/add-product-page'
  });
});

AdminRouter.post('/add-product', (req, res, next) => {
  new Product(req.body).save();
  res.redirect('/');
});

export default AdminRouter;
