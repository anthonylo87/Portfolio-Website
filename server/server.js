const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.CLIENT_USER,
    pass: process.env.CLIENT_PW,
  },
});

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use('/src/files', express.static(path.resolve(__dirname, '../src/files')));
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

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App running in port ${PORT}`);
});
