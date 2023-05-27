import express from 'express';
import { books } from './shop.js';

const Router = express.Router();

Router.get('/admin/add-product', (req, res, next) => {
  // No need to define the full path to the `view` file using path.join because
  // by default nodejs will look in the `views/` directory
  // We could also rely on app.set('views', 'myCustomViewsPath') to
  // set the path to the view files globally and avoid getting it for every response

  res.render('add-product', { path: req.path, pageTitle: 'Add Product' });
});

Router.post('/admin/add-product', (req, res, next) => {
  console.log('Adding Product', req.body);
  books.push(req.body);
  res.redirect('/');
});

export default Router;
