import express from 'express';
import path from 'path';
import { viewsPath } from '../paths.js';

const Router = express.Router();

Router.get('/', (req, res, next) => {
  res.sendFile(path.join(viewsPath, 'shop.html'));
});

export default Router;
