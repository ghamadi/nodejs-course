import express from 'express';

const app = express();

// app.use((req, res, next) => {
//   console.log('Global Middleware 1');
//   next();
// })

// app.use((req, res, next) => {
//   console.log('Global Middleware 2');
//   res.send('<h1>Hello World!</h1>');
// })

app.use('/users', (req, res, next) => {
  console.log('Users Path Middleware');
  res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Root Path Middleware');
  res.send('<h1>Home Page</h1>');
});

app.listen(3000);
console.log('Server is listenering on port 3000');
