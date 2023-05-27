import express from 'express';

const Router = express.Router();

export const books = [];

Router.get('/', (req, res, next) => {
  // No need to define the full path to the `view` file using path.join because
  // by default nodejs will look in the `views/` directory
  // We could also rely on app.set('views', 'myCustomViewsPath') to
  // set the path to the view files globally and avoid getting it for every response

  res.render('shop', { title: 'Shop', books, path: req.path });
});

export default Router;
