const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/.env' });

const transactionsRouter = require('./routes/transactions');

const app = express();

app.use('/api/v1/transactions', transactionsRouter);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in  ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);