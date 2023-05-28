import express from 'express';
import Product from '../models/product.js';

const ShopRouter = express.Router();

ShopRouter.get('/', (req, res, next) => {
  res.redirect('/shop/products');
});

ShopRouter.get('/cart', (req, res, next) => {
  res.render('main-layout', {
    page: 'shop/cart-page',
    path: req.path
  });
});

ShopRouter.get('/checkout', (req, res, next) => {
  res.redirect('/products');
});

ShopRouter.get('/products', async (req, res, next) => {
  try {
    const products = await Product.fetchAllProducts();
    res.render('main-layout', {
      page: 'shop/products-page',
      path: req.path,
      prods: products
    });
  } catch (error) {
    console.error('[Product] fetching products failed', err);
    res.status(500).send('<h1> Error fetching the data </h1>');
  }
});

export default ShopRouter;
