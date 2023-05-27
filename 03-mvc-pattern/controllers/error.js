import express from 'express';

const Router = express.Router();

// Establish unknown route handler
Router.use((req, res, next) => {
  console.log('NOT FOUND', req.path);
  res.status(404).render('layouts/main-layout', { path: req.path, page: '404' });
});

export default Router;
