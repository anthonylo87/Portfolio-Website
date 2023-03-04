const express = require('express');
const ViteExpress = require('vite-express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use(
  '/src/images',
  express.static(path.resolve(__dirname, '../src/images'))
);

app.get('/*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error ' + err,
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = process.env.PORT | 8080;

ViteExpress.listen(app, PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
