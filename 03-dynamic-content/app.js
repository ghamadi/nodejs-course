import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { rootPath, viewsPath } from './paths.js';
import AdminRouter from './router/admin.js';
import ShopRouter from './router/shop.js';

const app = express();
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootPath, 'public')));

// Establish route handlers
app.use(AdminRouter);
app.use(ShopRouter);

// Establish unknown route handler
app.use((req, res, next) => {
  console.log('NOT FOUND', req.path);
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// Run the server
app.listen(3000);
console.log('Server is listenering on port 3000');
