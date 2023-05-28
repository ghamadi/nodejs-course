import express from 'express';

const ErrorRouter = express.Router();

// Establish unknown route handler
ErrorRouter.use((req, res, next) => {
  console.error(`[Not Found] ${req.path}`);
  res.status(404).render('main-layout', {
    path: req.baseUrl + req.path,
    page: 'error/404-page'
  });
});

export default ErrorRouter;
