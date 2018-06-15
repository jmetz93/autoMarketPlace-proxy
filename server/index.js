const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 9000;

const corsOptions = {
  origin: 'http://75.101.193.74:5500',
  optionsSuccessStatus: 200
};

const app = express();

app.use(helmet());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
