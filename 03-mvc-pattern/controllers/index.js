import express from 'express';

const AppRouter = express.Router();

AppRouter.get('/', (req, res, next) => {
  res.redirect('/shop');
});

export default AppRouter;
