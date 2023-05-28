import express from 'express';
import Product from '../models/product.js';

const ShopRouter = express.Router();

ShopRouter.get('/', async (req, res, next) => {
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
