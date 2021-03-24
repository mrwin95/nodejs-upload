const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(express.urlencoded({ extended: true }));

global.__basedir = __dirname;
// initial env

dotenv.config({
  path: './config/config.env'
});

const routeUpload = require('./routes/upload');



app.use('/api/v1/upload', routeUpload);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running at: ${process.env.NODE_ENV}:${PORT}`)
});

