if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { HOST, PORT } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
