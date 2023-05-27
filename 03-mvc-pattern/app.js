import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { rootPath, viewsPath } from './paths.js';
import AdminRouter from './controllers/admin.js';
import ShopRouter from './controllers/shop.js';
import ErrorRouter from './controllers/error.js';

const app = express();
app.locals = {
  rootPath,
  viewsPath
};
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootPath, 'public')));

// Establish route handlers
app.use(AdminRouter);
app.use(ShopRouter);
app.use(ErrorRouter);

// Run the server
app.listen(3000);
console.log('Server is listenering on port 3000');
