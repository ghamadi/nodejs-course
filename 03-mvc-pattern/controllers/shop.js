import express from 'express';
import Product from '../models/product.js';

const ShopRouter = express.Router();

ShopRouter.get('/', (req, res, next) => {
  res.redirect('/shop/products');
});

ShopRouter.get('/cart', (req, res, next) => {
  res.render('main-layout', {
    page: 'shop/cart-page',
    path: req.baseUrl + req.path
  });
});

ShopRouter.get('/checkout', (req, res, next) => {
  res.render('main-layout', {
    page: 'shop/checkout-page',
    path: req.baseUrl + req.path
  });
});

ShopRouter.get('/orders', (req, res, next) => {
  res.render('main-layout', {
    page: 'shop/orders-page',
    path: req.baseUrl + req.path
  });
});

ShopRouter.get('/products', async (req, res, next) => {
  try {
    const products = await Product.fetchAllProducts();
    res.render('main-layout', {
      page: 'shop/products-page',
      path: req.baseUrl + req.path,
      prods: products
    });
  } catch (error) {
    console.error('[Product] fetching products failed', err);
    res.status(500).send('<h1> Error fetching the data </h1>');
  }
});

ShopRouter.get('/products/:id', async (req, res, next) => {
  try {
    const products = await Product.fetchAllProducts();
    const params = req.params;
    const product = products[+params.id - 1];

    if (!product) {
      next(); // proceed to next middleware (will reach 404)
    } else {
      res.render('main-layout', {
        page: 'shop/product-details-page',
        path: req.baseUrl + req.path,
        product: products[+params.id - 1] ?? {}
      });
    }
  } catch (error) {
    console.error('[Product] fetching products failed', err);
    res.status(500).send('<h1> Error fetching the data </h1>');
  }
});

export default ShopRouter;
