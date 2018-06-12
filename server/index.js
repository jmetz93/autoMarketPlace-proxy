const path = require('path');
const express = require('express');
const helmet = require('helmet');

const PORT = process.env.port || 9000;

const app = express();

app.use(helmet());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
